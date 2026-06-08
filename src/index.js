import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './components/logo.jpeg';
import './index.css';
import './styles/decorations.css';
import App from './App';

const favicon = document.querySelector('link[rel="icon"]');
if (favicon) favicon.href = logo;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
