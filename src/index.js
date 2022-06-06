import React from 'react';
import * as ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Content.css';
import 'react-toastify/dist/ReactToastify.css';


import App from './components/App';
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
