import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { format } from 'date-fns';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faStackOverflow,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import FaIcon from './FaIcon';
import { StyledList } from '../styles/common';

const StyledFooter = styled.div`
  align-items: center;
  background-color: ${props => props.theme.Colors.grayScale.grey1};
  color: ${props => props.theme.Colors.grayScale.whiteSmoke};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 1rem;

  ${breakpoint('desktop')`
    flex-direction: row;
    justify-content: center;
  `}
`;

const StyledFooterText = styled.p`
  color: ${props => props.theme.Colors.grayScale.whiteSmoke};
  margin-bottom: 1rem;
  text-align: center;

  > a {
    color: ${props => props.theme.Colors.green.aqua};
  }

  ${breakpoint('desktop')`
    margin-bottom: 0.5rem;
    margin-left: auto;
  `}
`;

const StyledFooterList = styled(StyledList)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0;

  li {
    padding: 0.8rem;

    ${breakpoint('desktop')`
      padding: 1.3rem;
    `}
  }

  ${breakpoint('desktop')`
      margin-bottom: 0;
  `}
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterList>
      <li>
        <FaIcon
          icon={faRss}
          iconSize="lg"
          url="/rss.xml"
          color="orange"
          containerSize="medium"
        />
      </li>
      <li>
        <FaIcon
          icon={faGithub}
          iconSize="lg"
          url="https://github.com/randyjp"
          color="green"
          containerSize="medium"
        />
      </li>
      <li>
        <FaIcon
          icon={faLinkedin}
          iconSize="lg"
          url="https://www.linkedin.com/in/randyperez"
          color="#3670AE"
          containerSize="medium"
        />
      </li>
      <li>
        <FaIcon
          icon={faTwitter}
          iconSize="lg"
          url="https://twitter.com/Randy_Perez"
          color="#50A1F2"
          containerSize="medium"
        />
      </li>
      <li>
        <FaIcon
          icon={faStackOverflow}
          iconSize="lg"
          url="https://stackoverflow.com/users/3271569/randyjp?tab=profile"
          color="#EF8023"
          containerSize="medium"
        />
      </li>
    </StyledFooterList>
    <StyledFooterText>
      {`© Randy Perez 2018-${format(new Date(), 'YYYY')}.  Powered by: `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noreferrer noopener"
      >
        Gatsby.js
      </a>
    </StyledFooterText>
  </StyledFooter>
);

export default Footer;
