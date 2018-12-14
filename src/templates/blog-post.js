import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Level from 'react-bulma-components/lib/components/level';
import Container from 'react-bulma-components/lib/components/container';
import BasicLayout from '../components/BasicLayout';

const BlogPost = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Fragment>
      <BasicLayout
        render={() => (
          <Fragment>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Fragment>
        )}
      />
      <Container>
        <Level>
          <Level.Side align="left">
            {previous && (
              <Level.Item>
                <Link to={previous.fields.slug}>Previous</Link>
              </Level.Item>
            )}
          </Level.Side>
          <Level.Side align="right">
            {next && (
              <Level.Item>
                <Link to={next.fields.slug}>Next</Link>
              </Level.Item>
            )}
          </Level.Side>
        </Level>
      </Container>
    </Fragment>
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
