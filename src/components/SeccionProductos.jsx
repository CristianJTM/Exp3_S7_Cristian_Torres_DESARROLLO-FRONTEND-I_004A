import Buscador from './Buscador.jsx';
import ProductoCard from './ProductoCard.jsx';

/**
 * Agrupa el buscador y la grilla de productos. Maneja los tres
 * estados posibles de la carga: cargando, error, o datos listos.
 */
function SeccionProductos({ cargando, error, productos, busqueda, onCambiarBusqueda, onAgregarAlCarrito, carritoIds }) {
    return (
        <section id="productos" className="seccion mb-4 p-4 rounded-3">
            <div className="container">
                <h2 className="fs-3">Productos destacados</h2>
                <p>Conoce algunos de los videojuegos más destacados disponibles en nuestra tienda.</p>

                <Buscador valor={busqueda} onCambiar={onCambiarBusqueda} />

                {/* Renderizado condicional según el estado de la carga */}
                {cargando && (
                    <p className="text-secondary fst-italic">Cargando productos...</p>
                )}

                {!cargando && error && (
                    <p className="mensaje-error">No se pudieron cargar los productos. Intenta nuevamente más tarde.</p>
                )}

                {!cargando && !error && productos.length === 0 && (
                    <p className="text-secondary fst-italic mt-3">No se encontraron productos que coincidan con tu búsqueda.</p>
                )}

                {!cargando && !error && productos.length > 0 && (
                    <div className="row g-4 mt-2">
                        {productos.map((producto) => (
                            <ProductoCard
                                key={producto.id}
                                producto={producto}
                                enCarrito={carritoIds.includes(producto.id)}
                                onAgregarAlCarrito={onAgregarAlCarrito}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default SeccionProductos;