import React from 'react';
import { Link } from 'gatsby';
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { rhythm } from '../utils/typography';

const BlogCard = ({ blog }) => {
  const {
    timeToRead,
    fields: { slug },
    frontmatter: { title, date, attachments },
  } = blog;
  const formattedDate = format(new Date(date), 'MMM D, YYYY');

  return (
    <Link to={slug}>
      <Card
        style={{
          height: '100%',
        }}
      >
        <Card.Image size="4by3" src={attachments[0].publicURL} />
        <Card.Content
          style={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
        >
          <Content
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <time
              style={{
                alignSelf: 'flex-end',
                fontSize: rhythm(1 / 2),
              }}
              dateTime={date}
            >
              {formattedDate}
            </time>
            <h1
              style={{
                fontSize: rhythm(1),
              }}
            >
              {title}
            </h1>
            {/* <span
              style={{
                alignSelf: 'flex-end',
              }}
            >
              {timeToRead} minutes read
            </span>{' '} */}
            <br />
          </Content>
        </Card.Content>
      </Card>
    </Link>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    timeToRead: PropTypes.number.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.array.isRequired,
      date: PropTypes.string.isRequired,
      attachments: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default BlogCard;
