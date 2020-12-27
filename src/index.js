import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// create react app supports importing css
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
// Why Mock API ?
// start before real API exits,independance, Backup-plan,
// ultra-fast, test-slowness, Aid-testing, Point to the real
// API later.
