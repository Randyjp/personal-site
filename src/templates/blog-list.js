import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BlogCard from '../components/BlogCard';
import { WideLayout } from '../components/BasicLayout';
import BlogPagination from '../components/Pagination';
import Seo from '../components/Seo';

const StyledGridContainer = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  margin-bottom: 3.75rem;
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
