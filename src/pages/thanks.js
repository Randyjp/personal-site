import React from 'react';
import styled from 'styled-components';
import BasicLayout from '../components/BasicLayout';
import Seo from '../components/Seo';
import { StyledBlueH1 } from '../styles/common';

const StyledSection = styled.section`
  min-height: calc(100vh - 200px);
  text-align: center;

  p {
    font-size: 1.125rem;
  }
`;

const pageThanks = () => (
  <BasicLayout>
    <React.Fragment>
      <Seo title="Thank You" />
      <StyledSection>
        <StyledBlueH1>Thank You!</StyledBlueH1>
        <p>
          I appreciate you getting in touch. I&apos;ll make sure to get back to
          you as soon as possible.
        </p>
      </StyledSection>
    </React.Fragment>
  </BasicLayout>
);

export default pageThanks;
