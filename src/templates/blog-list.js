import React from 'react';
import { Link } from 'gatsby';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
// eslint-disable-next-line
import Pagination from "react-bulma-components/lib/components/pagination";
import PropTypes from 'prop-types';
import BlogCard from '../components/BlogCard';
import BasicLayout from '../components/BasicLayout';
import SEO from '../components/Seo';

const BlogList = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const next = index < pageCount ? index + 1 : null;
  const previous = index > 1 ? index - 1 : null;
  return (
    <BasicLayout
      withNav
      withFooter
      render={() => {
        const blogs = group.map(blog => (
          <Columns.Column size="one-third" key={blog.node.fields.slug}>
            <BlogCard blog={blog.node} />
          </Columns.Column>
        ));

        return (
          <>
            <SEO
              title="All blog posts."
              keywords={[
                'blog',
                'javascript',
                'programming',
                'code',
                'developer',
              ]}
            />
            <Section>
              <Container>
                <Columns>{blogs}</Columns>
              </Container>
            </Section>
            <BlogPagination previous={previous} next={next} />
          </>
        );
      }}
    />
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
