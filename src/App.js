import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Navbar from 'components/layout/Navbar/Navbar';
import ErrorBoundary from 'components/helpers/ErrorBoundary';
import Routes from 'routes';

import './App.css';

const App = () => (
  <ErrorBoundary>
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container-fluid'>
          <div className='pt-4'>
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  </ErrorBoundary>
);

export default App;
