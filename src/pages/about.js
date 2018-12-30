import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import BasicLayout from '../components/BasicLayout';

const StyledContainer = styled(Container)`
  h1 {
    color: #4c9cdf;
  }
  h1 {
    text-align: center;
  }
`;

const StyleImage = styled(Img)`
  box-shadow: 8px 8px 10px #aaa;
  border-radius: 5px;
`;

const About = ({ data }) => {
  const { profilePicture } = data;
  return (
    <BasicLayout
      withNav
      withFooter
      StyledContainer={StyledContainer}
      render={() => (
        <>
          <Columns.Column size={12}>
            <h1>About Me and the Blog</h1>
          </Columns.Column>
          <Columns.Column size={12}>
            <StyleImage
              alt={`Randy's headshot`}
              fluid={profilePicture.childImageSharp.fluid}
            />
          </Columns.Column>
          <Columns.Column size={12}>
            <h2>About me</h2>
            <p>
              Eget nunc lobortis mattis aliquam faucibus purus in massa.
              Tristique et egestas quis ipsum suspendisse. Ultricies leo integer
              malesuada nunc vel risus. At urna condimentum mattis pellentesque.
              Fermentum posuere urna nec tincidunt. Sit amet venenatis urna
              cursus eget nunc. Pulvinar pellentesque habitant morbi tristique
              senectus et. Mollis nunc sed id semper risus in hendrerit gravida
              rutrum. Auctor urna nunc id cursus metus aliquam eleifend. Sem
              integer vitae justo eget magna fermentum. Mi tempus imperdiet
              nulla malesuada pellentesque.
            </p>
          </Columns.Column>
          <Columns.Column size={12}>
            <h2>Purpose of the Blog</h2>
            <p>
              Eget nunc lobortis mattis aliquam faucibus purus in massa.
              Tristique et egestas quis ipsum suspendisse. Ultricies leo integer
              malesuada nunc vel risus. At urna condimentum mattis pellentesque.
              Fermentum posuere urna nec tincidunt. Sit amet venenatis urna
              cursus eget nunc. Pulvinar pellentesque habitant morbi tristique
              senectus et. Mollis nunc sed id semper risus in hendrerit gravida
              rutrum. Auctor urna nunc id cursus metus aliquam eleifend. Sem
              integer vitae justo eget magna fermentum. Mi tempus imperdiet
              nulla malesuada pellentesque.
            </p>
          </Columns.Column>
          <Columns.Column size={12}>
            <h2>Contact me</h2>
            <p>
              Eget nunc lobortis mattis aliquam faucibus purus in massa.
              Tristique et egestas quis ipsum suspendisse. Ultricies leo integer
              malesuada nunc vel risus. At urna condimentum mattis pellentesque.
              Fermentum posuere urna nec tincidunt. Sit amet venenatis urna
              cursus eget nunc. Pulvinar pellentesque habitant morbi tristique
              senectus et. Mollis nunc sed id semper risus in hendrerit gravida
              rutrum. Auctor urna nunc id cursus metus aliquam eleifend. Sem
              integer vitae justo eget magna fermentum. Mi tempus imperdiet
              nulla malesuada pellentesque.
            </p>
          </Columns.Column>
        </>
      )}
    />
  );
};

About.propTypes = {
  data: PropTypes.shape({
    profilePicture: PropTypes.object.isRequired,
  }).isRequired,
};

export const aboutQuery = graphql`
  query AboutQuery {
    profilePicture: file(relativePath: { eq: "assets/about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
