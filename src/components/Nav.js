import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Box from 'react-bulma-components/lib/components/box';
import Container from 'react-bulma-components/lib/components/container';
import {
  faBlog,
  faFilePdf,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import FaIcon from './FaIcon';
import resume from '../../content/files/RandyPerezResume.pdf';

const logoQuery = graphql`
  query LogoQuery {
    logo: file(relativePath: { eq: "assets/logo.png" }) {
      childImageSharp {
        fixed(height: 90, width: 140) {
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
          // TODO: remove margin
          <Container
            style={{
              marginTop: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            <Box style={{ marginBottom: '1rem' }}>
              <Navbar color="white" active={open}>
                <Navbar.Brand>
                  <Link to="/" className="navbar-item">
                    <Img fixed={logo.childImageSharp.fixed} />
                  </Link>
                  <Navbar.Burger
                    onClick={() => this.setState({ open: !open })}
                  />
                </Navbar.Brand>
                <Navbar.Menu>
                  <Navbar.Container position="end">
                    <FaIcon
                      displayName="Blog"
                      icon={faBlog}
                      color="orange"
                      url="/"
                      cssClass="navbar-item"
                    />
                    <FaIcon
                      displayName="About"
                      icon={faAddressCard}
                      color="green"
                      url="/about"
                      cssClass="navbar-item"
                    />
                    {/* <NavItemLink
                      name="Services"
                      icon={faKeyboard}
                      color="grey"
                      to="#"
                    /> */}
                    <FaIcon
                      displayName="Resume"
                      icon={faFilePdf}
                      color="red"
                      url={resume}
                      cssClass="navbar-item"
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

export default Nav;
