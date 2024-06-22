import React from "react";
import ReactDOM from "react-dom/client";
import  App  from "./app.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
 
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>
);
