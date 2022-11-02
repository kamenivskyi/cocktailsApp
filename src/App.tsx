import React from "react";
import Navbar from "./components/layout/Navbar";
import ErrorBoundary from "components/helpers/ErrorBoundary";
import Routes from "routes";

import "./App.css";

const App = (): JSX.Element => (
  <ErrorBoundary>
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="pt-4">
          <Routes />
        </div>
      </div>
    </div>
  </ErrorBoundary>
);

export default App;
