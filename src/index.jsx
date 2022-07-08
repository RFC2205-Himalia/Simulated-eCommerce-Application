// Bring React in to build a component. 
import React from "react";
// Bring reactDOM in to mount component to the dom.
import reactDOM from "react-dom";
import "./index.scss";

// Here is out base App component. 
// Notice we are NOT using jsx here. This is because we have not set up babel yet.
const App = () => {
    return <h1>Hello Nick</h1>
  }
// Render our app to the dom mounted to the element with id of root inside our public/index.html file.
reactDOM.render(<App />, document.getElementById("app"));



/*

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  return <h1>Hello World</h1>
}

root.render(<App />);


*/