import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Columns from 'react-bulma-components/lib/components/columns';
import BasicLayout from '../components/BasicLayout';

export default ({ data }) => {
  const { profilePicture } = data;
  return (
    <BasicLayout
      render={() => (
        <>
          <Columns.Column>
            <Img fluid={profilePicture.childImageSharp.fluid} />
            <p>Hi</p>
          </Columns.Column>
        </>
      )}
    />
  );
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
