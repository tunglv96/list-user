/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class PageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: 'null',
    })
      .then(res => {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ products: res.data });
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <h3>ID: {match.params.id}</h3>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {this.state.products.map(product => {
                  if (match.params.id === `id=${product.id}`) {
                    return (
                      <React.Fragment>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.username}</TableCell>
                        <TableCell>{product.email}</TableCell>
                        <TableCell>{product.phone}</TableCell>
                        <TableCell>{product.website}</TableCell>
                      </React.Fragment>
                    );
                  }
                })}
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default PageView;
