import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import Routes from "./routes";
import history from "./service/history";

import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
