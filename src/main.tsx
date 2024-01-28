import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n.js';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.css';
import { Provider } from 'react-redux';
import store from './store';

const urls = [
    '/#/demo/TourNest',
    '/#/demo/MotorMenders',
    '/#/demo/dental-clinic',
    '/#/demo/Cleaned',
    '/#/demo/kinderGarten',
];

// console.log(urls.some((url) => window.location.href.includes(url)));

if (window.location.hash && urls.some((url) => window.location.href.includes(url))) {
    window.location.href = window.location.href.replace(/#\/?/, '');
    // window.location.reload()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HelmetProvider>
        <React.StrictMode>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>
            </Provider>
        </React.StrictMode>
    </HelmetProvider>
);
