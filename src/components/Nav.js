import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Box from 'react-bulma-components/lib/components/box';
import Container from 'react-bulma-components/lib/components/container';
import Icon from 'react-bulma-components/lib/components/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBlog,
  faFilePdf,
  faKeyboard,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
  state = {
    open: false,
  };

  render() {
    const { open } = this.state;
    return (
      <Container
        style={{
          marginTop: '1.5rem'
        }}
      >
        <Box>
          <Navbar color="white" active={open}>
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
                <NavItemLink name="About" icon={faAddressCard} to="#" />
                <NavItemLink name="Services" icon={faKeyboard} to="#" />
                <NavItemLink name="Blog" icon={faBlog} to="/blog-list" />
                <NavItemLink name="Resume" icon={faFilePdf} to="#" />
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
        </Box>
      </Container>
    );
  }
}

const NavItemLink = ({ name, icon, to }) => (
  <Link className="navbar-item" activeClassName="is-active" to={to}>
    <span
      style={{
        marginRight: '0.25rem',
      }}
    >
      <Icon color="info">
        <FontAwesomeIcon icon={icon} />
      </Icon>
    </span>
    <span>{name}</span>
  </Link>
);

NavItemLink.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    icon: PropTypes.array.isRequired,
    iconName: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired,
};

export default Nav;
