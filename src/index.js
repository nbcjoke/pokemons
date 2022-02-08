import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Router } from "./routes/Routes";

import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";

import Header from "./components/Header";
import { Footer } from "./components/Footer";
import "./reset.css";

const store = configureStore();

window.React = React;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Router />
        <Footer />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
