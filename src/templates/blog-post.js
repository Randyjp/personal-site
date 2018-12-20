import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Level from 'react-bulma-components/lib/components/level';
// eslint-disable-next-line
import Pagination from "react-bulma-components/lib/components/pagination";
import Columns from 'react-bulma-components/lib/components/columns';
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
          <Columns.Column size="three-fifths" offset="one-fifth">
            <Fragment>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Fragment>
          </Columns.Column>
        )}
      />
      <InnerBlogPagination previous={previous} next={next} />
    </Fragment>
  );
};

const InnerBlogPagination = ({ previous, next }) => (
  <Level>
    {previous && (
      <Level.Item>
        <Link className="pagination-previous" to={previous.fields.slug}>
          ← {previous.frontmatter.title}
        </Link>
      </Level.Item>
    )}
    {next && (
      <Level.Item>
        <Link className="pagination-next" to={next.fields.slug}>
          {next.frontmatter.title} →
        </Link>
      </Level.Item>
    )}
  </Level>
);

InnerBlogPagination.defaultProps = {
  previous: null,
  next: null,
};

InnerBlogPagination.propTypes = {
  previous: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }),
  next: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }),
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
  pageContext: PropTypes.shape({
    previous: PropTypes.object,
    next: PropTypes.object,
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
