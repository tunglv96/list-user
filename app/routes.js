/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import React from 'react';
import HomePage from './containers/HomePage/index2';
import Contact from './containers/Contact/index';
import View from './containers/HomePage/PageView/index';

const routes = [
  {
    path: '/home',
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '/contact',
    exact: true,
    main: () => <Contact />,
  },
  {
    path: '/pageview/:id',
    exact: true,
    main: ({match}) => <View match={match}/>,
  },
];

export default routes;
