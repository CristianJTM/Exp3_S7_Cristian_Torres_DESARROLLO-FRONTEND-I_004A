import { useState } from 'react';

/**
 * Formulario de suscripción con inputs controlados (useState) y
 * validación al enviar. Se monta como una segunda raíz de React,
 * independiente de la tienda (ver main.jsx).
 */
function BoletinForm() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState(null); // { texto, tipo: 'exito' | 'error' }

    function manejarEnvio(evento) {
        evento.preventDefault();
        const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre.trim() === '' || correo.trim() === '') {
            setMensaje({ texto: 'Por favor completa todos los campos.', tipo: 'error' });
            return;
        }

        if (!expresionCorreo.test(correo)) {
            setMensaje({ texto: 'Ingresa un correo electrónico válido.', tipo: 'error' });
            return;
        }

        setMensaje({ texto: '¡Gracias ' + nombre + '! Te suscribiste con ' + correo + '.', tipo: 'exito' });
        setNombre('');
        setCorreo('');
    }

    return (
        <form onSubmit={manejarEnvio} className="mt-4" noValidate>
            <h3 className="fs-5">Suscríbete a nuestro boletín</h3>

            <div className="mb-3">
                <label htmlFor="nombreBoletin" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombreBoletin"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="correoBoletin" className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    id="correoBoletin"
                    placeholder="tucorreo@ejemplo.com"
                    value={correo}
                    onChange={(evento) => setCorreo(evento.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-primary">Suscribirme</button>

            {/* Renderizado condicional: solo se muestra si hay un mensaje que informar */}
            {mensaje && (
                <p className={(mensaje.tipo === 'exito' ? 'mensaje-exito' : 'mensaje-error') + ' mt-2 mb-0'}>
                    {mensaje.texto}
                </p>
            )}
        </form>
    );
}

export default BoletinForm;