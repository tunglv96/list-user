/* eslint-disable no-unreachable */
/* eslint-disable consistent-return */
/* eslint-disable vars-on-top */
/* eslint-disable no-cond-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-var */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prefer-stateless-function */
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
    var {match} = this.props;
  // eslint-disable-next-line prettier/prettier
  
  const { products } = this.state;
    return( 
      <React.Fragment>
        <h3>ID: {match.params.id}</h3>
        {/* <MaterialTable
          title="Multiple Actions Preview"
          columns={[
            {
              title: 'Id',
              field: 'id',
            },
            {
              title: 'Name',
              field: 'name',
            },
            {
              title: 'Username',
              field: 'username',
            },
            {
              title: 'Email',
              field: 'email',
            },
          ]}
          // eslint-disable-next-line no-undef
          data={products.map(product => product)}
        /> */}

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                { 
                  this.state.products.map(product => {
                    if(match.params.id === `id=${product.id}`) {
                      return <React.Fragment>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.email}</TableCell>
                            </React.Fragment>
                            
                    }
                  })
                }
                </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default PageView;
