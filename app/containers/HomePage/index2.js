import React, { Component } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

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

  // onView = (id) => {
  //   console.log(id);
  // }

  render() {
    const { products } = this.state;

    return (
      <React.Fragment>
        <h1>trang chu</h1>
        <MaterialTable
          title="Multiple Actions Preview"
          columns={[
            {
              title: 'ViewInfo',
              render: rowData => (
                <Link
                  component={RouterLink}
                  to={`pageview/id=${rowData.id}`}
                  onClick={() => this.onView(rowData.id)}
                >
                  ViewInfo
                </Link>
              ),
            },
            {
              title: 'Id',
              field: 'id',
            },
            {
              title: 'Name',
              field: 'name',
            },
            {
              title: 'User name',
              field: 'username',
              render: rowData => {
                if (rowData.username.length > 8) {
                  return (
                    <span style={{ color: 'red' }}>{rowData.username}</span>
                  );
                }
                return rowData.username;
              },
            },
            {
              title: 'Email',
              field: 'email',
            },
            {
              title: 'Phone',
              field: 'phone',
            },
            {
              title: 'Website',
              field: 'website',
            },
          ]}
          // eslint-disable-next-line no-undef
          data={products.map(product => product)}
        />
      </React.Fragment>
    );
  }
}

export default HomePage;
