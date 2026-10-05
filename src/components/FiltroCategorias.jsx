/**
 * Muestra las categorías disponibles como botones; al hacer click
 * se filtra el catálogo. Resalta la categoría seleccionada.
 */
function FiltroCategorias({ categorias, categoriaSeleccionada, onSeleccionar }) {
    return (
        <section id="categorias" className="seccion mb-4 p-4 rounded-3">
            <div className="container">
                <h2 className="fs-3">Categorías</h2>
                <p>Haz click en una categoría para filtrar el catálogo.</p>

                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <button
                            type="button"
                            className={'categoria p-3 rounded text-center' + (categoriaSeleccionada === 'todos' ? ' categoria-seleccionada' : '')}
                            onClick={() => onSeleccionar('todos')}
                        >
                            Todos los productos
                        </button>
                    </div>

                    {categorias.map((categoria) => (
                        <div className="col-12 col-sm-6 col-lg-4" key={categoria}>
                            <button
                                type="button"
                                className={'categoria p-3 rounded text-center' + (categoriaSeleccionada === categoria ? ' categoria-seleccionada' : '')}
                                onClick={() => onSeleccionar(categoria)}
                            >
                                {categoria}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FiltroCategorias;