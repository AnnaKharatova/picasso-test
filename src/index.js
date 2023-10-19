import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import {store} from './store/store'
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter /* basename={window.location.pathname || ""} */ >
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>

);

