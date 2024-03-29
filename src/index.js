import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoContents from './CryptoContents';
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <React.StrictMode>
    <CryptoContents>
       <App />
    </CryptoContents>
  </React.StrictMode>,
document.getElementById('root'));
