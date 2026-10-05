import { useState } from 'react';
import { formatearPrecio } from '../utils/formatearPrecio.js';

/**
 * Muestra un único producto: imagen, nombre, categoría, precio
 * (con oferta si corresponde), descripción y botón para comprar.
 *
 * Recibe `enCarrito` (booleano) desde App para saber si este producto
 * ya está agregado, y así cambiar el texto/estilo del botón principal.
 */
function ProductoCard({ producto, enCarrito, onAgregarAlCarrito, onQuitarDelCarrito }) {
    // Estado propio del componente: no se comparte con nadie más.
    // Controla un botón "Ver más / Ver menos" independiente del carrito.
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

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

                    {/* Botón que cambia de texto al hacer click (estado local, useState) */}
                    <button
                        type="button"
                        className="btn btn-outline-light btn-sm mb-2 align-self-start"
                        onClick={() => setMostrarDetalles(!mostrarDetalles)}
                    >
                        {mostrarDetalles ? 'Ver menos ▲' : 'Ver más detalles ▼'}
                    </button>

                    {/* Renderizado condicional: solo aparece si mostrarDetalles es true */}
                    {mostrarDetalles && (
                        <p className="detalle-extra mb-2">
                            Categoría: {producto.categoria}. Despacho a todo Chile y compra protegida.
                        </p>
                    )}

                    {/* Botón principal: alterna entre agregar y quitar según si el
                        producto ya está en el carrito (enCarrito viene de App vía props) */}
                    <button
                        type="button"
                        className={'btn mt-auto ' + (enCarrito ? 'btn-success' : 'btn-primary')}
                        onClick={() => enCarrito ? onQuitarDelCarrito(producto.id) : onAgregarAlCarrito(producto)}
                    >
                        {enCarrito ? '✓ En el carrito (quitar)' : 'Agregar al carrito'}
                    </button>
                </div>
            </article>
        </div>
    );
}

export default ProductoCard;