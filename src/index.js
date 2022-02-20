import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Router } from "./routes/Routes";

import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";

import Header from "./components/Header";
import { Footer } from "./components/Footer";
import "./reset.css";
import { createTheme, ThemeProvider } from "@mui/material";

const store = configureStore();

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Header />
          <Router />
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
