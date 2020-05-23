import React from "react";

import { PersistGate } from "redux-persist/integration/react";

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
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
