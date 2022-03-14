import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";

import store from "./reducers/store";

ReactDOM.render(
  <Router>
    {/* <UserContext.Provider value={token}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </UserContext.Provider> */}
  </Router>,
  document.getElementById("root")
);
