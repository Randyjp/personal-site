import React from 'react';
import styled from 'styled-components';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import BasicLayout from '../components/BasicLayout';
import Seo from '../components/Seo';

const StyledSection = styled(Section)`
  h1 {
    color: #4c9cdf;
  }

  min-height: calc(100vh - 200px);
  text-align: center;
`;

const pageThanks = () => (
  <BasicLayout
    withNav
    withFooter
    render={() => (
      <>
        <Seo title="Thank You" />
        <StyledSection>
          <Container>
            <Columns>
              <Columns.Column size={12}>
                <h1>Thank You!</h1>
              </Columns.Column>
              <Columns.Column size={12}>
                <p>
                  I appreciate you getting in touch. I&apos;ll make sure to get
                  back to you as soon as possible.
                </p>
              </Columns.Column>
            </Columns>
          </Container>
        </StyledSection>
      </>
    )}
  />
);

export default pageThanks;
