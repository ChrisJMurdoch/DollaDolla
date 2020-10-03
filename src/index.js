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

// Demo queries
/*console.log( HAL.ask("What is your name?") );
console.log( HAL.ask("What is my balance?") );
console.log( HAL.ask("How close to my goal am I?") );
console.log( HAL.ask("How much have I spent on Netflix this month?") );
console.log( HAL.ask("Open the Pod bay doors, please, HAL.") );*/
