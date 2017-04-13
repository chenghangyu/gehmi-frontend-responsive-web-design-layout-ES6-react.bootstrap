import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Glyphicon, Button, Nav, Navbar, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';

import s from './Navigation.css';
import Link from '../Link';
import history from '../../../core/history';

// onSelect is passed down by dropdown menu
const NavMenuItem = ({ item, divider, onSelect }) =>
  <div style={{ textAlign: 'center' }}>
    <MenuItem eventKey={item} onSelect={onSelect}>
      <div className={s.navItemText}>{item}</div>
    </MenuItem>
    { divider && <MenuItem divider />}
  </div>;

const NavLabelItem = ({ item, eventHandler, divider }) =>
  <NavItem eventKey={item} onSelect={eventHandler}>
    <div className={s.navItemText}>{item}</div>
  </NavItem>;

class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  handleNavAction=(selectedKey) => {
    switch (selectedKey) {
      default:
        history.push('/');
        break;
    }
  }

  render() {
    const { user } = this.props;
    return (
      <Navbar className={s.nav} fluid>

        {/* Brand */}
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>
              <div className={s.brandText} >GEHMI</div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle>
            <div className="sr-only" >Toggle Navigation</div>
            <div className={cx('icon-bar', s.mainColorBackground)} />
            <div className={cx('icon-bar', s.mainColorBackground)} />
            <div className={cx('icon-bar', s.mainColorBackground)} />
          </Navbar.Toggle>
        </Navbar.Header>

        <Navbar.Collapse>
          {/* Left Side Nav Items */}
          {/* <Nav pullLeft>
            <NavLabelItem item={'description'} eventHandler={this.handleNavAction} />
          </Nav> */}


        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(Navigation);
