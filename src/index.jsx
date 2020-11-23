import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/index.css";
import App from "./components/App";
import TestCharacterProvider from "./context/TestCharacterContext";

ReactDOM.render(
  <React.StrictMode>
    <TestCharacterProvider>
      <App />
    </TestCharacterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
