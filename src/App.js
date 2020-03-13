import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './Login';
import Dashboard from './Dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/Dashboard' component={Dashboard} />
    </Router>
  );
}

export default App;
