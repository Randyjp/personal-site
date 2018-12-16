import React, { Component } from 'react';
import { Link } from 'gatsby';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Box from 'react-bulma-components/lib/components/box';
import Container from 'react-bulma-components/lib/components/container';

class Nav extends Component {
  state = {
    open: false,
  };

  render() {
    const { open } = this.state;
    return (
      <Box>
        <Navbar color="white" active={open}>
          <Container>
            <Navbar.Brand>
              <Navbar.Item renderAs="a" href="#">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: a modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                />
              </Navbar.Item>
              <Navbar.Burger onClick={() => this.setState({ open: !open })} />
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Container position="end">
                {/* adds classname navbar-item to use bulma styles on gatsby links */}
                <Link
                  className="navbar-item"
                  activeClassName="is-active"
                  to="#"
                >
                  About
                </Link>
                <Link className="navbar-item" to="#">
                  Services
                </Link>
                <Link
                  className="navbar-item"
                  activeClassName="is-active"
                  to="/blog-list"
                >
                  Blog
                </Link>
                <Link
                  className="navbar-item"
                  activeClassName="is-active"
                  to="#"
                >
                  Resume
                </Link>
              </Navbar.Container>
            </Navbar.Menu>
          </Container>
        </Navbar>
      </Box>
    );
  }
}

export default Nav;
