import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { OnScreenProvider } from './context';
import './index.css';

ReactDOM.render(
  <OnScreenProvider>
    <App />
  </OnScreenProvider>,
document.getElementById('root'));
