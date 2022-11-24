import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import App from './App';
// import Hitung from './components/Hitung';
// import Dashboard from './components/Dashboard';
import WebMain from './components/layout/WebMain'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hitung /> */}
    {/* <Dashboard /> */}
    <WebMain />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
