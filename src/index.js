import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Routes";

import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import Header from './components/index';


const store = configureStore();

window.React = React;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Header />
    <Router />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
