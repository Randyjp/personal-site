import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Box from 'react-bulma-components/lib/components/box';
import Container from 'react-bulma-components/lib/components/container';
import Icon from 'react-bulma-components/lib/components/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBlog,
  faFilePdf,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

const logoQuery = graphql`
  query LogoQuery {
    logo: file(relativePath: { eq: "assets/logo.png" }) {
      childImageSharp {
        fixed(height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

class Nav extends Component {
  state = {
    open: false,
  };

  render() {
    const { open } = this.state;
    return (
      <StaticQuery
        query={logoQuery}
        render={({ logo }) => (
          <Container
            style={{
              marginTop: '1.5rem',
            }}
          >
            <Box>
              <Navbar color="white" active={open}>
                <Navbar.Brand>
                  <Navbar.Item renderAs="a" href="#">
                    <Img fixed={logo.childImageSharp.fixed} />
                  </Navbar.Item>
                  <Navbar.Burger
                    onClick={() => this.setState({ open: !open })}
                  />
                </Navbar.Brand>
                <Navbar.Menu>
                  <Navbar.Container position="end">
                    <NavItemLink
                      name="About Me"
                      icon={faAddressCard}
                      color="green"
                      to="/about"
                    />
                    {/* <NavItemLink
                      name="Services"
                      icon={faKeyboard}
                      color="grey"
                      to="#"
                    /> */}
                    <NavItemLink
                      name="Blog"
                      icon={faBlog}
                      color="orange"
                      to="/blog-list"
                    />
                    <NavItemLink
                      name="Resume"
                      icon={faFilePdf}
                      color="red"
                      to="#"
                    />
                  </Navbar.Container>
                </Navbar.Menu>
              </Navbar>
            </Box>
          </Container>
        )}
      />
    );
  }
}

const NavItemLink = ({ name, icon, color, to }) => (
  <Link className="navbar-item" activeClassName="is-active" to={to}>
    {/* adds classname navbar-item to use bulma styles on gatsby links */}
    <Icon>
      <FontAwesomeIcon icon={icon} color={color} />
    </Icon>
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
  color: PropTypes.string.isRequired,
};

export default Nav;
