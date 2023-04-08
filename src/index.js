import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// required packages
// axios,react-bootstrap,bootstrap,@fortawesome/react-fontawesome,@fortawesome/free-solid-svg-icons,react-player,react-router-dom,@mui/material @emotion/react @emotion/styled,react-material-ui-carousel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


