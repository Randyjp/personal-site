import React from 'react';
import { Link, graphql } from 'gatsby';
import { format, parse} from 'date-fns';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Level from 'react-bulma-components/lib/components/level';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Icon from 'react-bulma-components/lib/components/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line
import Pagination from "react-bulma-components/lib/components/pagination";
import BasicLayout from '../components/BasicLayout';
import Comments from '../components/Comments';
import { rhythm } from '../utils/typography';
import Bio from '../components/Bio';
import SEO from '../components/Seo';

const StyledArticle = styled.article`
  .section {
    padding-bottom: ${rhythm(6 / 100)};
    padding-top: ${rhythm(6 / 10)};
  }
`;

const BlogPost = ({ data, pageContext }) => {
  const {
    html,
    timeToRead,
    frontmatter: { title, date, shortDescription },
  } = data.markdownRemark;
  const { previous, next, slug } = pageContext;
  const formattedDate = format(parse(date), 'MMM D, YYYY');
  return (
    <BasicLayout
      withNav
      withFooter
      render={() => (
        <>
          <SEO title={title} description={shortDescription} />
          <StyledArticle>
            <Section>
              <Container>
                <Columns>
                  <Columns.Column size="three-fifths" offset="one-fifth">
                    <header>
                      <h1>{title}</h1>
                      <p
                        style={{
                          fontSize: rhythm(0.5),
                          marginTop: rhythm(-4 / 5),
                        }}
                      >
                        <time dateTime={date}>
                          {formattedDate} ~{' '}
                          <Icon color="info">
                            <FontAwesomeIcon icon={faClock} />
                          </Icon>
                          <span>
                            {timeToRead} minute{timeToRead > 1 ? 's' : ''} read
                          </span>
                        </time>
                      </p>
                    </header>
                  </Columns.Column>
                  <Columns.Column size="one-fifth" />
                </Columns>
              </Container>
            </Section>
            <Section>
              <Container>
                <Columns>
                  <Columns.Column size="three-fifths" offset="one-fifth">
                    {/* eslint-disable-next-line react/no-danger */}
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </Columns.Column>
                  <Columns.Column size="one-fifth" />
                </Columns>
              </Container>
            </Section>
          </StyledArticle>
          <Section>
            <Container>
              <Columns>
                <Columns.Column size={12}>
                  <hr />
                </Columns.Column>
                <Bio />
              </Columns>
            </Container>
          </Section>
          <InnerBlogPagination previous={previous} next={next} />
          <Section>
            <Container>
              <Columns>
                <Columns.Column>
                  <Comments
                    url={`https://randyperez.tech${slug}`}
                    title={title}
                    slug={slug}
                  />
                </Columns.Column>
              </Columns>
            </Container>
          </Section>
        </>
      )}
    />
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
      timeToRead
      frontmatter {
        title
        author
        date
        shortDescription
      }
    }
  }
`;

export default BlogPost;
