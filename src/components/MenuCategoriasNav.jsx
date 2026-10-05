/**
 * Opciones de categoría que se renderizan dentro del dropdown del
 * navbar (HTML estático) mediante un portal, para que el acceso
 * rápido desde la barra de navegación use el mismo estado y la
 * misma función de filtrado que la sección "Categorías" de la página.
 */
function MenuCategoriasNav({ categorias, categoriaSeleccionada, onSeleccionar }) {
    return (
        <>
            <li>
                <a
                    className={'dropdown-item' + (categoriaSeleccionada === 'todos' ? ' active' : '')}
                    href="#productos"
                    onClick={() => onSeleccionar('todos')}
                >
                    Todos los productos
                </a>
            </li>

            {categorias.map((categoria) => (
                <li key={categoria}>
                    <a
                        className={'dropdown-item' + (categoriaSeleccionada === categoria ? ' active' : '')}
                        href="#productos"
                        onClick={() => onSeleccionar(categoria)}
                    >
                        {categoria}
                    </a>
                </li>
            ))}
        </>
    );
}

export default MenuCategoriasNav;