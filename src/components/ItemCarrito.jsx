import { formatearPrecio } from '../utils/formatearPrecio.js';

/**
 * Una fila del resumen del carrito, con sus propios controles de
 * cantidad. Reutilizable: se repite por cada producto agregado.
 */
function ItemCarrito({ item, onSumar, onRestar, onEliminar }) {
    return (
        <li className="item-carrito d-flex justify-content-between align-items-center py-2">
            <span>
                {item.nombre} — {formatearPrecio(item.precio)} x {item.cantidad} = {formatearPrecio(item.precio * item.cantidad)}
            </span>

            <span className="controles-carrito">
                <button type="button" className="btn btn-sm btn-outline-light" onClick={() => onRestar(item.id)}>-</button>
                <button type="button" className="btn btn-sm btn-outline-light" onClick={() => onSumar(item.id)}>+</button>
                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onEliminar(item.id)}>Quitar</button>
            </span>
        </li>
    );
}

export default ItemCarrito;