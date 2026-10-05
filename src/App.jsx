import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import SeccionProductos from './components/SeccionProductos.jsx';
import Carrito from './components/Carrito.jsx';
import FiltroCategorias from './components/FiltroCategorias.jsx';
import MenuCategoriasNav from './components/MenuCategoriasNav.jsx';

/**
 * Componente raíz de la tienda: guarda el estado principal
 * (productos, carrito, filtros) y coordina los componentes hijos
 * pasándoles props y funciones.
 */
function App() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

    // Carga el catálogo una sola vez, al montar el componente (Fetch API + Hooks)
    useEffect(() => {
        fetch('assets/data/productos.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo obtener el catálogo (' + respuesta.status + ')');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
                setCargando(false);
            })
            .catch((err) => {
                console.error('Error al cargar productos.json:', err);
                setError(true);
                setCargando(false);
            });
    }, []);

    /** Agrega un producto al carrito, o suma 1 si ya estaba agregado. */
    function agregarAlCarrito(producto) {
        const precioFinal = producto.precioOferta ?? producto.precio;

        setCarrito((carritoActual) => {
            const yaExiste = carritoActual.find((item) => item.id === producto.id);

            if (yaExiste) {
                return carritoActual.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }

            return [...carritoActual, { id: producto.id, nombre: producto.nombre, precio: precioFinal, cantidad: 1 }];
        });
    }

    /** Suma una unidad a un producto que ya está en el carrito. */
    function sumarUnidad(id) {
        setCarrito((carritoActual) =>
            carritoActual.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item))
        );
    }

    /** Resta una unidad; si llega a 0, el producto se elimina del carrito. */
    function restarUnidad(id) {
        setCarrito((carritoActual) =>
            carritoActual
                .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item))
                .filter((item) => item.cantidad > 0)
        );
    }

    /** Elimina por completo un producto del carrito. */
    function eliminarDelCarrito(id) {
        setCarrito((carritoActual) => carritoActual.filter((item) => item.id !== id));
    }

    /** Vacía todo el carrito. */
    function vaciarCarrito() {
        setCarrito([]);
    }

    // IDs de los productos que ya están en el carrito (para el botón
    // "Agregar al carrito" / "En el carrito" de cada ProductoCard)
    const carritoIds = carrito.map((item) => item.id);

    // Lista de categorías únicas, calculada a partir del catálogo cargado
    const categorias = [...new Set(productos.map((producto) => producto.categoria))];

    // Productos visibles según el texto buscado y la categoría seleccionada
    const productosFiltrados = productos.filter((producto) => {
        const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoriaSeleccionada === 'todos' || producto.categoria === categoriaSeleccionada;
        return coincideNombre && coincideCategoria;
    });

    // Nodo del navbar (HTML estático) donde se "teletransportan" las
    // opciones de categoría, manteniendo el estado en este componente.
    const nodoMenuNav = document.getElementById('listaCategoriasNav');

    return (
        <>
            {nodoMenuNav && createPortal(
                <MenuCategoriasNav
                    categorias={categorias}
                    categoriaSeleccionada={categoriaSeleccionada}
                    onSeleccionar={setCategoriaSeleccionada}
                />,
                nodoMenuNav
            )}

            <SeccionProductos
                cargando={cargando}
                error={error}
                productos={productosFiltrados}
                busqueda={busqueda}
                onCambiarBusqueda={setBusqueda}
                onAgregarAlCarrito={agregarAlCarrito}
                onQuitarDelCarrito={eliminarDelCarrito}
                carritoIds={carritoIds}
            />

            <Carrito
                carrito={carrito}
                onSumar={sumarUnidad}
                onRestar={restarUnidad}
                onEliminar={eliminarDelCarrito}
                onVaciar={vaciarCarrito}
            />

            <FiltroCategorias
                categorias={categorias}
                categoriaSeleccionada={categoriaSeleccionada}
                onSeleccionar={setCategoriaSeleccionada}
            />
        </>
    );
}

export default App;