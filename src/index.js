import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store/store'
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={window.location.pathname || ""}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);
