import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { OnScreenProvider } from './context';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <OnScreenProvider>
      <App />
    </OnScreenProvider>
  </BrowserRouter>,
document.getElementById('root'));
