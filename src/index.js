import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global-styles.scss';

import reportWebVitals from './reportWebVitals';

import { Home } from './templates/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);

reportWebVitals();
