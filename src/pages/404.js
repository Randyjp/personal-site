import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import BasicLayout from '../components/BasicLayout';
import SEO from '../components/Seo';

const StyledSectin = styled(Section)`
  h1 {
    color: #4c9cdf;
    text-align: center;
  }
  p {
    color: #fff;
    margin-top: -1.8rem;
    position: relative;
    text-align: right;
  }
`;

const Page404 = ({ data }) => {
  const { notFoundPicture } = data;
  return (
    <BasicLayout
      withNav
      withFooter
      render={() => (
        <>
          <SEO title="404 Not Found" />
          <StyledSectin>
            <Hero>
              <Hero.Body>
                <Container>
                  <h1>Page Not Found</h1>
                  <Img
                    fluid={notFoundPicture.childImageSharp.fluid}
                    alt="empyt note"
                  />
                  <p>Photo by Kelly Sikkema on Unsplash</p>
                </Container>
              </Hero.Body>
            </Hero>
          </StyledSectin>
        </>
      )}
    />
  );
};

Page404.propTypes = {
  data: PropTypes.shape({
    notFoundPicture: PropTypes.object.isRequired,
  }).isRequired,
};

export const notFoundQuery = graphql`
  query NotFoundQuery {
    notFoundPicture: file(relativePath: { eq: "assets/404pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Page404;
