import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";
import {ThemeProviderComponent} from "./core/theme";

ReactDOM.render(
  <ThemeProviderComponent>
    <App />
  </ThemeProviderComponent>,
  document.getElementById("root")
);
