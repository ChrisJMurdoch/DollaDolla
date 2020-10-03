import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import AI from './AI.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


// ======= AI example code ===========


// Create AI with account info
const HAL = new AI(
  2000, // Balance
  2300, // Goal
  { // Spending breakdown
    netflix:7.99,
    amazon:19.21,
    tesco: 54.32
  }
);

// Expose AI to console
window.HAL = HAL;

// Example query
// console.log( HAL.ask("What is my balance?") );
