import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';

class Header extends React.Component {
  render() {
    return (
      <Navigation className={s.nav} />
    );
  }
}

export default withStyles(s)(Header);
