import React from 'react';
import Home from './Home';
import Layout from '../../components/Generic/Layout';

export default {

  path: '/',

  action() {
    return {
      title: 'GEHMI - Bake goods just for you',
      component: <Layout><Home /></Layout>,
    };
  },

};
