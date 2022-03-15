// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
//=============================================
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// import { Provider } from "react-redux";

// import store from "./reducers/store";

// ReactDOM.render(
//   <Router>
//     {/* <UserContext.Provider value={token}> */}
//     <Provider store={store}>
//       <App />
//     </Provider>
//     {/* </UserContext.Provider> */}
//   </Router>,
//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./reducers/index";
//context providers
// import AuthProvider from "./context/auth";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
