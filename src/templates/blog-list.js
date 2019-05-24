import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Columns from 'react-bulma-components/lib/components/columns';
// eslint-disable-next-line
import Pagination from 'react-bulma-components/lib/components/pagination';
import PropTypes from 'prop-types';
import BlogCard from '../components/BlogCard';
import { WideLayout } from '../components/BasicLayout';
import Seo from '../components/Seo';

const StyledGridContainer = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
`;

const BlogList = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const next = index < pageCount ? index + 1 : null;
  const previous = index > 1 ? index - 1 : null;

  const blogs = group.map(blog => (
    <BlogCard blog={blog.node} key={blog.node.fields.slug} />
  ));

  return (
    <WideLayout>
      <React.Fragment>
        <Seo
          title="All blog posts."
          keywords={['blog', 'javascript', 'programming', 'code', 'developer']}
        />
        <StyledGridContainer>{blogs}</StyledGridContainer>
        <BlogPagination previous={previous} next={next} />
      </React.Fragment>
    </WideLayout>
  );
};

const BlogPagination = ({ previous, next }) => {
  const localPrevious = previous === 1 ? '' : previous;
  return (
    <Columns.Column
      style={{
        marginTop: '60px',
      }}
    >
      <nav
        className="pagination is-centered is-medium"
        role="navigation"
        aria-label="pagination"
      >
        {previous && (
          <Link
            className="pagination-previous"
            to={`/blog-list/${localPrevious}`}
          >
            ← Newer Posts
          </Link>
        )}
        {next && (
          <Link
            className="pagination-next is-right"
            to={`/blog-list/${next}`}
            style={{
              marginLeft: 'auto',
            }}
          >
            Older Posts →
          </Link>
        )}
      </nav>
    </Columns.Column>
  );
};

BlogPagination.propTypes = {
  previous: PropTypes.number,
  next: PropTypes.number,
};

BlogPagination.defaultProps = {
  previous: null,
  next: null,
};

BlogList.propTypes = {
  pageContext: PropTypes.shape({
    pathPrefix: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,
    group: PropTypes.arrayOf(
      PropTypes.shape({
        edges: PropTypes.shape({
          timeToRead: PropTypes.number.isRequired,
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              attachments: PropTypes.arrayOf(PropTypes.object).isRequired,
            }).isRequired,
          }).isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
        }),
      }).isRequired
    ),
  }).isRequired,
};

export default BlogList;
