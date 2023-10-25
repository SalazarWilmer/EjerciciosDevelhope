import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");

const appRoot = ReactDOM.createRoot(root);
appRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
