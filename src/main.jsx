import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import BoletinForm from './components/BoletinForm.jsx';
import './style.css';

// RAÍZ 1: la tienda completa (productos + carrito + categorías)
createRoot(document.getElementById('raiz-tienda')).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// RAÍZ 2: el formulario de boletín, independiente de la tienda
createRoot(document.getElementById('raiz-boletin')).render(
    <StrictMode>
        <BoletinForm />
    </StrictMode>
);