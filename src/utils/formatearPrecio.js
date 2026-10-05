/**
 * Da formato de precio en pesos chilenos a un número.
 * Función reutilizable, usada por varios componentes.
 */
export function formatearPrecio(numero) {
    return Number(numero).toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0
    });
}