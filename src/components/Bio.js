import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Icon from 'react-bulma-components/lib/components/icon';
import Columns from 'react-bulma-components/lib/components/columns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faStackOverflow,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const StyledImage = styled(Image)`
  border-radius: 100%;
`;

const CenteredColumn = styled(Columns.Column)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const avatarQuery = graphql`
  query AvatarQuery {
    avatar: file(relativePath: { eq: "assets/avatar.png" }) {
      childImageSharp {
        fixed(width: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Bio = () => (
  <StaticQuery
    query={avatarQuery}
    render={({ avatar }) => (
      <>
        <hr />
        <Columns>
          {/* <Columns.Column size="three-fifths" offset="one-fifth"> */}
          <Columns.Column size={8} offset={2}>
            <Columns>
              <CenteredColumn size="one-quarter">
                <StyledImage fixed={avatar.childImageSharp.fixed} />
              </CenteredColumn>
              <Columns.Column size="three-quarter">
                <h3>Randy Perez</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column size={2} />
          <Columns.Column size={8} offset={4}>
            <ul>
              <a
                href="https://github.com/randyjp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size="large">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </Icon>
              </a>
              <a
                href="https://www.linkedin.com/in/randyperez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size="large">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </Icon>
              </a>
              <a
                href="https://twitter.com/Randy_Perez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size="large">
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                </Icon>
              </a>
              <a
                href="https://stackoverflow.com/users/3271569/randyjp?tab=profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size="large">
                  <FontAwesomeIcon icon={faStackOverflow} size="3x" />
                </Icon>
              </a>
            </ul>
          </Columns.Column>
        </Columns>
      </>
    )}
  />
);

export default Bio;
