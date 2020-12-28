import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
// creates const called render that references reacct-doms's render function
// equivalent to import line 2 and then const render = ReactDOM.render;
import "bootstrap/dist/css/bootstrap.min.css";
// create react app supports importing css
import HomePage from "./components/HomePage";
import App from "./App";

render(<App />, document.getElementById("root"));

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
// Why Mock API ?
// start before real API exits,independance, Backup-plan,
// ultra-fast, test-slowness, Aid-testing, Point to the real API later.
// create-react-app looks at index.js to  determine what files are in your app
