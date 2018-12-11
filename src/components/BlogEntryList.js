import React from 'react';
import { Link } from 'gatsby';
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';
import PropTypes from 'prop-types';

const BlongEntryList = ({ blog }) => {
  const {
    timeToRead,
    fields: { slug },
    frontmatter: { title, date, attachments },
  } = blog;
  return (
    <Link to={slug}>
      <Card>
        <Card.Image size={128} src={attachments[0].publicURL} />
        <Card.Content>
          <Content>
            {title} ~ <span>{timeToRead} minutes read</span> <br />
            <time dateTime={date}>{date}</time>
          </Content>
        </Card.Content>
      </Card>
    </Link>
  );
};

BlongEntryList.propTypes = {
  blog: PropTypes.shape({
    timeToRead: PropTypes.number.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.array.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default BlongEntryList;
