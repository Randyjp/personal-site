import React from 'react';
import { graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import BasicLayout, { CONTAINER_TYPE } from '../components/BasicLayout';
import Comments from '../components/Comments';
import Bio from '../components/Bio';
import SEO from '../components/Seo';
import ShareButton from '../components/ShareButton';
import Pagination from '../components/Pagination';

const StyledArticle = styled.article`
  font-size: 1.125rem;
`;

const StyledSubHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -1.3rem;
  justify-content: flex-start;

  time {
    padding-top: 1rem;
  }

  p {
    font-size: 0.9rem;
  }

  @media (max-width: 769px) {
    box-sizing: border-box;
    justify-content: center;

    p {
      margin-bottom: 0.5rem;
    }
  }
`;

const StyledShareContainer = styled.div`
  display: flex;
  & > div {
    cursor: pointer;
    padding: 1rem;
    padding-top: 0;
  }
`;

const BlogPost = ({ data, pageContext }) => {
  const {
    html,
    timeToRead,
    frontmatter: { title, date, shortDescription, tags },
  } = data.markdownRemark;
  const { previous, next, slug } = pageContext;
  const formattedDate = format(parse(date), 'MMM D, YYYY');
  return (
    <BasicLayout containerType={CONTAINER_TYPE.STANDARD}>
      <React.Fragment>
        <SEO title={title} description={shortDescription} keywords={tags} />
        <StyledArticle>
          <section>
            <div>
              <header>
                <h1>{title}</h1>
                <StyledSubHeaderContainer>
                  <p>
                    <time dateTime={date}>
                      {formattedDate} ~ <FontAwesomeIcon icon={faClock} />
                      <span>
                        {timeToRead} minute{timeToRead > 1 ? 's' : ''} read
                      </span>
                    </time>
                  </p>
                  <StyledShareContainer>
                    <ShareButton
                      title={title}
                      slug={slug}
                      platform="facebook"
                    />
                    <ShareButton title={title} slug={slug} platform="twitter" />
                    <ShareButton title={title} slug={slug} platform="reddit" />
                    <ShareButton
                      title={title}
                      slug={slug}
                      platform="linkedin"
                    />
                  </StyledShareContainer>
                </StyledSubHeaderContainer>
              </header>
            </div>
          </section>
          <section>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </section>
        </StyledArticle>
        <section>
          <hr />
          <Bio />
        </section>
        <InnerBlogPagination previous={previous} next={next} />
        <section>
          <Comments
            url={`https://randyperez.tech${slug}`}
            title={title}
            slug={slug}
          />
        </section>
      </React.Fragment>
    </BasicLayout>
  );
};

const InnerBlogPagination = ({ previous, next }) => {
  const previousObj = previous
    ? { text: previous.frontmatter.title, url: previous.fields.slug }
    : previous;
  const nextObj = next
    ? { text: next.frontmatter.title, url: next.fields.slug }
    : next;

  return <Pagination previous={previousObj} next={nextObj} />;
};

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
      timeToRead: PropTypes.number.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    previous: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        author
        date
        shortDescription
        tags
      }
    }
  }
`;

export default BlogPost;
