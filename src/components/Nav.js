import React, { Component } from 'react';
import { Link } from 'gatsby';
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
            {/* adds classname navbar-item to use bulma styles on gatsby links */}
            <Link className="navbar-item" to="#">
              About
            </Link>
            <Link className="navbar-item" to="#">
              Services
            </Link>
            <Link className="navbar-item" to="/blog-list">
              Blog
            </Link>
            <Link className="navbar-item" to="#">
              Resume
            </Link>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Nav;
