import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import React from "react";
import App from "./App";

import "./i18n.js";

import "./bootstrap.min.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
