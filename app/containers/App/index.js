/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/index';
import routes from '../../routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>{this.showContentMenus(routes)}</Switch>
      </Router>
    );
  }

  showContentMenus = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.main}
        />
      ));
    }
    return result;
  };
}

export default App;
