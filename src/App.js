import React from "react";
import { ToastContainer } from "react-toastify";

import { PersistGate } from "redux-persist/integration/react";

import createGlobalStyle from "./styles/global";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import Routes from "./routes";
import history from "./service/history";

import { store, persistor } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <createGlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
