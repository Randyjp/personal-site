import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Columns from 'react-bulma-components/lib/components/columns';
import {
  faTwitter,
  faStackOverflow,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import FaIcon from './FaIcon';
import StyledList from '../styles/common';

const StyledImage = styled(Image)`
  border-radius: 100%;
`;

const CenteredColumn = styled(Columns.Column)`
  display: flex;
  justify-content: center;
  align-items: center;
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
            <li>
              <FaIcon
                icon={faGithub}
                iconSize="2x"
                url="https://github.com/randyjp"
                color="#302F2F"
                containerSize="large"
              />
            </li>
            <li>
              <FaIcon
                icon={faLinkedin}
                iconSize="2x"
                url="https://www.linkedin.com/in/randyperez"
                color="#3670AE"
                containerSize="large"
              />
            </li>
            <li>
              <FaIcon
                icon={faTwitter}
                iconSize="2x"
                url="https://twitter.com/Randy_Perez"
                color="#50A1F2"
                containerSize="large"
              />
            </li>
            <li>
              <FaIcon
                icon={faStackOverflow}
                iconSize="2x"
                url="https://stackoverflow.com/users/3271569/randyjp?tab=profile"
                color="#EF8023"
                containerSize="large"
              />
            </li>
          </StyledList>
        </CenteredColumn>
      </>
    )}
  />
);

export default Bio;
