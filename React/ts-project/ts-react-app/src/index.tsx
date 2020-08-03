import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hello from "./components/demo/Hello";
import HelloClass from "./components/demo/HelloClass";
import HelloHOC from "./components/demo/HelloHOC";
import HelloHook from "./components/demo/HelloHooks";
ReactDOM.render(
  <React.StrictMode>
    <Hello name="Typescript" />
    <HelloClass name="Typescript" />
    <HelloHOC loading={true} name="Typescript" />
    <HelloHook name="Typescript" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
