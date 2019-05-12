import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import BasicLayout from '../components/BasicLayout';
import Seo from '../components/Seo';
import { StyledBlueH1 } from '../styles/common';

const StyledSection = styled.section`
  margin-bottom: 2rem;
  position: relative;
  text-align: center;

  p {
    color: ${props => props.theme.Colors.grayScale.white};
    bottom: 0;
    position: absolute;
    text-align: right;
    right: 0.5rem;
  }
`;

const Page404 = ({ data }) => {
  const { notFoundPicture } = data;
  return (
    <BasicLayout>
      <React.Fragment>
        <Seo title="404 Not Found" />
        <StyledSection>
          <StyledBlueH1>Page Not Found</StyledBlueH1>
          <Img fluid={notFoundPicture.childImageSharp.fluid} alt="empyt note" />
          <p>Photo by: Kelly Sikkema</p>
        </StyledSection>
      </React.Fragment>
    </BasicLayout>
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
