import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Level from "react-bulma-components/lib/components/level";
import BasicLayout from "../components/BasicLayout";
import Pagination from "react-bulma-components/lib/components/pagination";

const BlogPost = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title }
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
      <InnerBlogPagination previous={previous} next={next} />
    </Fragment>
  );
};

const InnerBlogPagination = ({ previous, next }) => (
  <Level className="pagination">
    <Level.Side align="left">
      {previous && (
        <Level.Item>
          <Link className="pagination-previous" to={previous.fields.slug}>
            ← {previous.frontmatter.title}
          </Link>
        </Level.Item>
      )}
    </Level.Side>
    <Level.Side align="right">
      {next && (
        <Level.Item>
          <Link className="pagination-next" to={next.fields.slug}>
            {next.frontmatter.title} →
          </Link>
        </Level.Item>
      )}
    </Level.Side>
  </Level>
);

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  pageContext: PropTypes.shape({
    previous: PropTypes.object,
    next: PropTypes.object
  }).isRequired
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
