import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Icon from 'react-bulma-components/lib/components/icon';
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
        <StyledImage fixed={avatar.childImageSharp.fixed} />
        <p>Software Engineer from the Dominican Republic</p>
        <ul>
          <a href="https://github.com/randyjp">
            <Icon>
              <FontAwesomeIcon icon={faGithub} />
            </Icon>
          </a>
          <Icon>
            <FontAwesomeIcon icon={faTwitter} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faLinkedin} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faStackOverflow} />
          </Icon>
        </ul>
      </>
    )}
  />
);

export default Bio;
