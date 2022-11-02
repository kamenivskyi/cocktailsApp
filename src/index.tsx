import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import React from "react";
import App from "./App";

import "./i18n.ts";

import "./bootstrap.min.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
