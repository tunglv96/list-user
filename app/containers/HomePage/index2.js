/* eslint-disable react/no-unused-state */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
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
    const { products } = this.state;
    return (
      <React.Fragment>
        <h1>trang chu</h1>
        <MaterialTable
          title="Multiple Actions Preview"
          columns={[
            { title: 'Id', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Username', field: 'username' },
            { title: 'Email', field: 'email' },
          ]}
          // eslint-disable-next-line no-undef
          data={products.map(product => product)}
          options={{
            rowStyle: rowData => ({
              backgroundColor: (rowData.username.length > 8) ? '#f44336' : '#f5f5f5f5'
            })
          }}
        />
      </React.Fragment>
    );
  }
}

export default HomePage;
