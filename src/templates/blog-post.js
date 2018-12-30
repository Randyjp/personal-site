import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import Level from 'react-bulma-components/lib/components/level';
import Columns from 'react-bulma-components/lib/components/columns';
import Icon from 'react-bulma-components/lib/components/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line
import Pagination from "react-bulma-components/lib/components/pagination";
import BasicLayout from '../components/BasicLayout';
import Comments from '../components/Comments';
import { rhythm } from '../utils/typography';
import Bio from '../components/Bio';

const BlogPost = ({ data, pageContext }) => {
  const {
    html,
    timeToRead,
    frontmatter: { title, date },
  } = data.markdownRemark;
  const { previous, next, slug } = pageContext;
  const formattedDate = format(new Date(date), 'MMM D, YYYY');
  return (
    <Fragment>
      <BasicLayout
        withNav
        render={() => (
          <>
            <Columns.Column size="three-fifths" offset="one-fifth">
              <article>
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
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </article>
            </Columns.Column>
            <Columns.Column size={12}>
              <hr />
            </Columns.Column>
            <Bio />
          </>
        )}
      />
      <InnerBlogPagination previous={previous} next={next} />
      <Comments
        url={`http://localhost:8000/${slug}`}
        title={title}
        slug={slug}
      />
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
      timeToRead
      frontmatter {
        title
        author
        date
      }
    }
  }
`;

export default BlogPost;
