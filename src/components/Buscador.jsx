/**
 * Input controlado (el estado vive en el componente padre) que filtra
 * el catálogo mientras el usuario escribe, usando el evento onChange.
 */
function Buscador({ valor, onCambiar }) {
    return (
        <div className="row g-2 mb-3">
            <div className="col-12 col-md-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por nombre..."
                    value={valor}
                    onChange={(evento) => onCambiar(evento.target.value)}
                />
            </div>
        </div>
    );
}

export default Buscador;