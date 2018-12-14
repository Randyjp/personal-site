import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BasicLayout from '../components/BasicLayout';

const BlogPost = ({ data }) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <BasicLayout
      render={() => (
        <Fragment>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Fragment>
      )}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`;

export default BlogPost;
