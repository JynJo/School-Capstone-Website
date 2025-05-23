import './bootstrap';
import 'preline'
import '../css/app.css'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { HSStaticMethods } from "preline";
import 'react-photo-view/dist/react-photo-view.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// HSStaticMethods.autoInit();

// const observer = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//         HSStaticMethods.autoInit();
//     }
// });

// observer.observe(document.body, {
//     attributes: true,
//     subtree: true,
//     childList: true,
//     characterData: true,
// });
createInertiaApp({
    title: title => title ? `${title} - Lourdes College` : 'Lourdes College',
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
