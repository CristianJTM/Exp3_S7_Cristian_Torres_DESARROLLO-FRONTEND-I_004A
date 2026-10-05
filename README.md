# Tienda de Videojuegos

eCommerce desarrollado con **React 19** (componentes funcionales + Hooks), **Vite** y **Bootstrap 5**, que permite explorar un catálogo de videojuegos, filtrarlo por nombre o categoría, y gestionar un carrito de compras con contador y total dinámicos.

🔗 **Demo en GitHub Pages:** https://cristianjtm.github.io/Exp3_S8_Cristian_Torres_DESARROLLO-FRONTEND-I_004A/

## Funcionalidades

- **Catálogo dinámico**: los productos se cargan desde `public/assets/data/productos.json` con la Fetch API dentro de un `useEffect`, con manejo de los estados de carga, error y sin resultados.
- **Carrito de compras**: agregar/quitar productos directamente desde la tarjeta, sumar/restar unidades y vaciar el carrito. Contador y total se recalculan automáticamente con `reduce`.
- **Botón inteligente**: cada tarjeta muestra "Agregar al carrito" o "✓ En el carrito (quitar)" según el estado del carrito, cambiando también de color.
- **Ver más / Ver menos**: botón con estado local (`useState`) en cada tarjeta que muestra u oculta información adicional del producto.
- **Búsqueda en vivo**: filtra el catálogo mientras se escribe (`onChange`).
- **Filtro por categoría**: disponible tanto en el menú desplegable del navbar (vía `ReactDOM.createPortal`) como en los botones de la sección "Categorías"; ambos comparten el mismo estado en `App`.
- **Precios con oferta**: precio normal tachado + precio de oferta con badge, con renderizado condicional.
- **Formulario de boletín**: inputs controlados con `useState`, validación al enviar y mensaje de éxito/error.
- **Renderizado condicional**: cargando/error/sin resultados, carrito vacío vs. con productos, precio normal vs. oferta, detalles expandidos/colapsados.

## Tecnologías

- React 19 (componentes funcionales, `useState`, `useEffect`, `ReactDOM.createPortal`)
- Vite 8 (bundler y servidor de desarrollo)
- Bootstrap 5.3.8 (vía CDN, para navbar, carrusel y grid)
- CSS propio (`src/style.css`) para la identidad visual del sitio
- ESLint (linter de código)

## Estructura del proyecto

```
│   index.html          ← plantilla HTML con los puntos de montaje de React
│   vite.config.js      ← configuración de Vite (base para gh-pages)
│   package.json
│
├───public
│   └───assets
│       ├───data
│       │       productos.json      ← catálogo cargado con Fetch API
│       └───img
│               videojuego1.jpg ... videojuego8.jpg
│
├───src
│   │   App.jsx         ← componente raíz: estado global y lógica de negocio
│   │   main.jsx        ← punto de entrada: monta las 2 raíces de React
│   │   style.css       ← estilos propios del sitio
│   │
│   ├───components
│   │       ProductoCard.jsx
│   │       SeccionProductos.jsx
│   │       Buscador.jsx
│   │       FiltroCategorias.jsx
│   │       MenuCategoriasNav.jsx
│   │       Carrito.jsx
│   │       ItemCarrito.jsx
│   │       BoletinForm.jsx
│   │
│   └───utils
│           formatearPrecio.js      ← función reutilizable de formato de precio
│
└───capturas de pantalla
        chrome.png
        firefox.png
        laptop.png
        movil.png
        msedge.png
        tablet.png
```

> `dist/` y `node_modules/` son generados automáticamente y están en `.gitignore`.

## Componentes de React

| Componente | Responsabilidad |
|---|---|
| `App` | Componente raíz: guarda el estado global (productos, carrito, búsqueda, categoría) y coordina los demás. |
| `SeccionProductos` | Agrupa el buscador y la grilla; maneja los tres estados de carga. |
| `ProductoCard` | Tarjeta de producto con estado local (`mostrarDetalles`) y botón que alterna entre agregar y quitar del carrito. |
| `Buscador` | Input controlado que filtra el catálogo por nombre en tiempo real. |
| `FiltroCategorias` | Botones de categoría con resalte de la selección activa. |
| `MenuCategoriasNav` | Mismo filtro de categorías, renderizado dentro del dropdown del navbar vía `createPortal`. |
| `Carrito` | Resumen del carrito: contador, listado con controles de cantidad y total. |
| `ItemCarrito` | Una fila del carrito, reutilizable por cada producto agregado. |
| `BoletinForm` | Formulario de suscripción con validación, montado como segunda raíz de React. |

## Cómo ejecutar localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Cómo construir y desplegar

```bash
# Construir la versión de producción en dist/
npm run build

# Publicar en GitHub Pages (rama gh-pages)
npm run deploy
```