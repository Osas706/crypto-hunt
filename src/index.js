import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoContents from './CryptoContents';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContents>
       <App />
    </CryptoContents>
  </React.StrictMode>,
document.getElementById('root'));
