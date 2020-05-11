import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Image from 'gatsby-image';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  faTwitter,
  faStackOverflow,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import FaIcon from './FaIcon';
import { StyledList } from '../styles/common';

const StyledBioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledBioList = styled(StyledList)`
  display: flex;
  flex: 0 1 100%;
  justify-content: center;
`;

const StyledImageContainer = styled.div`
  flex: 0 1 20%;
  margin-bottom: 1rem;

  img {
    border-radius: 100%;
  }

  ${breakpoint('tablet')`
    margin-bottom:  0;
  `}
`;

const StyledBioText = styled.div`
  flex: 0 2 80%;
  max-width: 40rem;
  text-align: justify;

  ${breakpoint('tablet')`
    margin-left: 1rem;  
  `}
`;

const avatarQuery = graphql`
  query AvatarQuery {
    avatar: file(relativePath: { eq: "assets/about.jpg" }) {
      childImageSharp {
        fixed(width: 150, quality: 100) {
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
      <StyledBioContainer>
        <StyledImageContainer>
          <Image fixed={avatar.childImageSharp.fixed} />
        </StyledImageContainer>
        <StyledBioText>
          <h3>Randy Perez</h3>
          <p>
            I am a Software Developer from Santo Domingo, Dominican Republic. I
            have been programming for 8+ years and professionally for the last
            6+ years. Currently, I work for{' '}
            <OutboundLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.bairesdev.com/"
            >
              BairesDev
            </OutboundLink>{' '}
            an international outsourcing company that lends my service to{' '}
            <OutboundLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pinterest.com/"
            >
              Pinterest
            </OutboundLink>
            , a social media company based in San Francisco.
          </p>
        </StyledBioText>
        <StyledBioList>
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
        </StyledBioList>
      </StyledBioContainer>
    )}
  />
);

export default Bio;
