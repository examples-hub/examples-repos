import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello, it's create-react-app-ts for CodeSandbox</h1>
      <h2>Start editing to see some magic happen</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
