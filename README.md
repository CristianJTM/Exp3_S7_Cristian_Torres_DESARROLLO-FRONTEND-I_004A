# Tienda de Videojuegos (versión React)

eCommerce desarrollado con **React** (componentes funcionales + Hooks) y **Bootstrap 5**, que permite explorar un catálogo de videojuegos, filtrarlo por nombre o categoría, y agregar productos a un carrito de compras con contador y total dinámicos.

Esta versión reemplaza la manipulación manual del DOM de la entrega anterior por componentes de React con estado (`useState`) y efectos (`useEffect`), sin usar herramientas de compilación: React y Babel se cargan por CDN y `app.jsx` se transforma directamente en el navegador.

🔗 **Demo en GitHub Pages:** [agrega aquí el link de tu sitio publicado]

## Funcionalidades

- **Catálogo de productos**: cada producto muestra imagen, nombre, categoría, descripción corta, precio normal y, si corresponde, precio de oferta (con el precio normal tachado).
- **Carrito de compras**: agregar productos, sumar/restar unidades, eliminar un producto o vaciar el carrito completo. Contador de productos y total se recalculan automáticamente.
- **Búsqueda en vivo**: filtra el catálogo mientras se escribe (`onChange`).
- **Filtro por categoría**: disponible tanto en el menú desplegable "Categorías" del navbar como en botones clickeables dentro de la página; ambos resaltan la categoría seleccionada y comparten el mismo estado.
- **Formulario de boletín**: inputs controlados con `useState`, validación al enviar (`onSubmit`) y mensaje de éxito/error.
- **Renderizado condicional**: mensajes de "cargando", "error al cargar" y "sin resultados" en los productos; "carrito vacío" vs. resumen con productos; precio normal vs. precio con oferta.
- **Carga externa de datos**: el catálogo se obtiene desde `assets/data/productos.json` con la Fetch API dentro de un `useEffect`.

## Tecnologías

- React 18 (componentes funcionales, Hooks `useState`/`useEffect` y `ReactDOM.createPortal`) vía CDN
- Babel Standalone (transformación de JSX en el navegador)
- Bootstrap 5.3.8 (CSS y JS bundle vía CDN)
- CSS propio para la identidad visual del sitio

## Estructura del proyecto

```
│   index.html
│   README.md
│
├───assets
│   ├───css
│   │       style.css
│   │
│   ├───data
│   │       productos.json
│   │
│   ├───img
│   │       videojuego1.jpg ... videojuego8.jpg
│   │
│   └───js
│           app.jsx
│
└───evidencias
        (capturas de pantalla de las funcionalidades)
```

## Componentes de React (`assets/js/app.jsx`)

| Componente | Responsabilidad |
|---|---|
| `App` | Componente raíz: guarda el estado (productos, carrito, búsqueda, categoría) y coordina a los demás. |
| `SeccionProductos` | Agrupa el buscador y la grilla; maneja los estados de carga/error/sin resultados. |
| `ProductoCard` | Tarjeta de un producto individual (reutilizable, una por producto). |
| `Buscador` | Input controlado que filtra el catálogo por nombre. |
| `FiltroCategorias` | Botones de categoría (dentro de la página) para filtrar el catálogo. |
| `MenuCategoriasNav` | Mismas opciones de categoría, renderizadas dentro del dropdown del navbar mediante `ReactDOM.createPortal`, compartiendo el estado con `FiltroCategorias`. |
| `Carrito` | Resumen del carrito: contador, listado y total. |
| `ItemCarrito` | Una fila del carrito (reutilizable, una por producto agregado). |
| `BoletinForm` | Formulario de suscripción, montado como una segunda raíz de React independiente de la tienda. |

## Cómo ejecutar el proyecto localmente

Como el sitio carga `productos.json` con la Fetch API, no se puede abrir `index.html` directamente con doble click. Hay que servirlo con un servidor local:

**Opción A — Live Server (VS Code)**
1. Instala la extensión "Live Server".
2. Click derecho sobre `index.html` → "Open with Live Server".

**Opción B — Python**
```bash
python -m http.server
```
Y abre `http://localhost:8000` en el navegador.
