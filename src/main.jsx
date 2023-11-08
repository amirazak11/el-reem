import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18n';
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import './index.css';
import './responsive.css'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <I18nextProvider i18n={i18n}>
    <BrowserRouter basename='/'>
    <App />
    </BrowserRouter>
  </I18nextProvider>
    </React.StrictMode>
)
