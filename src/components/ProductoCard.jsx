import { formatearPrecio } from '../utils/formatearPrecio.js';

/**
 * Muestra un único producto: imagen, nombre, categoría, precio
 * (con oferta si corresponde), descripción y botón para comprar.
 */
function ProductoCard({ producto, onAgregarAlCarrito }) {
    // Renderizado condicional: si el producto tiene precioOferta,
    // mostramos el precio normal tachado + el precio de oferta.
    const tieneOferta = producto.precioOferta !== null && producto.precioOferta !== undefined;

    return (
        <div className="col-12 col-md-6 col-lg-4 producto-item">
            <article className="card producto h-100">
                <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={'Portada de ' + producto.nombre}
                />

                <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{producto.nombre}</h3>

                    <span className="badge-categoria mb-2">{producto.categoria}</span>

                    <p className="card-text">{producto.descripcion}</p>

                    {/* Precio: normal, o normal tachado + oferta si existe */}
                    {tieneOferta ? (
                        <p className="mb-2">
                            <span className="precio-tachado">{formatearPrecio(producto.precio)}</span>
                            <span className="precio-oferta">{formatearPrecio(producto.precioOferta)}</span>
                            <span className="badge-oferta ms-2">Oferta</span>
                        </p>
                    ) : (
                        <p className="precio-producto mb-2">{formatearPrecio(producto.precio)}</p>
                    )}

                    <button
                        type="button"
                        className="btn btn-primary mt-auto"
                        onClick={() => onAgregarAlCarrito(producto)}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </article>
        </div>
    );
}

export default ProductoCard;