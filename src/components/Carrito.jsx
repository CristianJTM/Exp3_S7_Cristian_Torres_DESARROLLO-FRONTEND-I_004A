import { formatearPrecio } from '../utils/formatearPrecio.js';
import ItemCarrito from './ItemCarrito.jsx';

/**
 * Muestra el resumen de compra: contador de productos, listado
 * y total. Renderizado condicional cuando el carrito está vacío.
 */
function Carrito({ carrito, onSumar, onRestar, onEliminar, onVaciar }) {
    // Valores derivados del estado del carrito (no son estado en sí mismos)
    const cantidadTotal = carrito.reduce((suma, item) => suma + item.cantidad, 0);
    const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

    return (
        <section id="carrito" className="seccion mb-4 p-4 rounded-3">
            <div className="container">
                <h2 className="fs-3">Carrito de compras</h2>
                <p>Tienes {cantidadTotal} {cantidadTotal === 1 ? 'producto' : 'productos'} en tu carrito.</p>

                {/* Renderizado condicional: carrito vacío vs. con productos */}
                {carrito.length === 0 ? (
                    <p className="text-secondary fst-italic">Tu carrito está vacío.</p>
                ) : (
                    <>
                        <ul className="lista-carrito list-unstyled mt-3 mb-3">
                            {carrito.map((item) => (
                                <ItemCarrito
                                    key={item.id}
                                    item={item}
                                    onSumar={onSumar}
                                    onRestar={onRestar}
                                    onEliminar={onEliminar}
                                />
                            ))}
                        </ul>

                        <p id="totalCarrito" className="fs-5 fw-bold mb-3">Total: {formatearPrecio(total)}</p>

                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={onVaciar}>
                            Vaciar carrito
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}

export default Carrito;