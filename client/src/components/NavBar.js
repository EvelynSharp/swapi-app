import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { Menu, Modal, Button, Icon, Grid } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return(
      <div>
        <Menu>
          <Menu.Item>HOME</Menu.Item>
          <Menu.Item>SEARCH</Menu.Item>
          <Menu.Item><NavLink to='/login'>LOGIN</NavLink></Menu.Item>
          <Menu.Item><NavLink to='/register'>REGISTER</NavLink></Menu.Item>
          <Menu.Item>LOGOUT</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
