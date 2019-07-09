import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from './style';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
