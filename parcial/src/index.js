import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';
import Food from './components/Food';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';


import { messages } from './lenguajes/idiomas';

function App() {
  const [locale, setLocale] = useState('es');

  const handleLanguageChange = (lang) => {
    setLocale(lang);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div style={{ textAlign: 'right', padding: '10px' }}>
        <button onClick={() => handleLanguageChange('es')} className="btn btn-outline-primary me-2">Español</button>
        <button onClick={() => handleLanguageChange('en')} className="btn btn-outline-primary">English</button>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="home/:titulo" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);