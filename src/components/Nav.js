import React, { Component } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

class Nav extends Component {
  state = {
    open: false,
  };

  render() {
    const { open } = this.state;
    return (
      <Navbar color="white" active={open}>
        <Navbar.Brand>
          <Navbar.Burger onClick={() => this.setState({ open: !open })} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
            <Navbar.Item href="#">About</Navbar.Item>
            <Navbar.Item href="#">Blog</Navbar.Item>
            <Navbar.Item href="#">Resume</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Nav;
