import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
                    <FaIcon
                      displayName="About Me"
                      icon={faAddressCard}
                      color="green"
                      url="/about"
                    />
                    {/* <NavItemLink
                      name="Services"
                      icon={faKeyboard}
                      color="grey"
                      to="#"
                    /> */}
                    <FaIcon
                      displayName="Blog"
                      icon={faBlog}
                      color="orange"
                      url="/blog-list"
                    />
                    <FaIcon
                      displayName="Resume"
                      icon={faFilePdf}
                      color="red"
                      url="/somewhere"
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
