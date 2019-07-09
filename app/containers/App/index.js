/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage/index2';
import Contact from '../Contact/index';
import Header from '../../components/Header/index';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}
