import React from 'react';
import PropTypes from 'prop-types';
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

const StyledList = styled.ul`
  list-style: none;

  li {
    display: inline;
  }
`;

const StyledP = styled.p`
  text-align: justify;
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

const BioSocialLink = ({ icon, iconSize, url, color, containerSize }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon size={containerSize}>
        <FontAwesomeIcon icon={icon} size={iconSize} color={color} />
      </Icon>
    </a>
  </li>
);

const Bio = () => (
  <StaticQuery
    query={avatarQuery}
    render={({ avatar }) => (
      <>
        <Columns.Column size={8} offset={2}>
          <Columns>
            <CenteredColumn size="one-quarter">
              <StyledImage fixed={avatar.childImageSharp.fixed} />
            </CenteredColumn>
            <Columns.Column size="three-quarters">
              <h3>Randy Perez</h3>
              <StyledP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </StyledP>
            </Columns.Column>
          </Columns>
        </Columns.Column>
        <Columns.Column size={2} />
        <CenteredColumn>
          <StyledList>
            <BioSocialLink
              icon={faGithub}
              iconSize="2x"
              url="https://github.com/randyjp"
              color="#302F2F"
              containerSize="large"
            />
            <BioSocialLink
              icon={faLinkedin}
              iconSize="2x"
              url="https://www.linkedin.com/in/randyperez"
              color="#3670AE"
              containerSize="large"
            />
            <BioSocialLink
              icon={faTwitter}
              iconSize="2x"
              url="https://twitter.com/Randy_Perez"
              color="#50A1F2"
              containerSize="large"
            />
            <BioSocialLink
              icon={faStackOverflow}
              iconSize="2x"
              url="https://stackoverflow.com/users/3271569/randyjp?tab=profile"
              color="#EF8023"
              containerSize="large"
            />
          </StyledList>
        </CenteredColumn>
      </>
    )}
  />
);

BioSocialLink.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.array.isRequired,
    iconName: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
  }).isRequired,
  iconSize: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  containerSize: PropTypes.string.isRequired,
};

export default Bio;
