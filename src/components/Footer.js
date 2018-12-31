import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import BulmaFooter from 'react-bulma-components/lib/components/footer';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faStackOverflow,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import FaIcon from './FaIcon';
import StyledList from '../styles/common';

const StyledFooter = styled(BulmaFooter)`
  a {
    color: #3bb3a1;
  }
  p {
    margin-bottom: 0;
  }
  ul {
    margin-bottom: 0;
  }
  li {
    padding: 1rem;
  }

  /* Bulma's mobilbe breakpoint */
  @media (max-width: 769px) {
    p {
      text-align: center;
    }
    ul {
      font-size: 2rem;
      text-align: center;
    }
    li {
      display: block;
    }
  }
  .first-column {
    order: 2;
  }

  color: whitesmoke;
  padding: 1rem 0.5rem;
`;
const Footer = () => (
  <StyledFooter>
    <Container>
      <Columns multiline={false}>
        <Columns.Column
          className="first-column"
          offset={2}
          mobile={{
            size: 12,
          }}
          tablet={{
            size: 5,
          }}
          desktop={{
            size: 5,
          }}
        >
          <StyledList>
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
          </StyledList>
        </Columns.Column>
        <Columns.Column
          mobile={{
            size: 12,
          }}
          tablet={{
            size: 5,
          }}
          desktop={{
            size: 5,
          }}
        >
          <p>
            {`© Randy Perez 20018-${format(new Date(), 'YYYY')}.  Powered by: `}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              Gatsby.js
            </a>
          </p>
        </Columns.Column>
      </Columns>
    </Container>
  </StyledFooter>
);

export default Footer;
