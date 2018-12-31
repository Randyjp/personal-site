import React from 'react';
import { Link } from 'gatsby';
import Card from 'react-bulma-components/lib/components/card';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const StyledCard = styled(Card)`
  h1 {
    color: #4c9cdf;
    font-size: ${rhythm(4 / 5)};
    margin-top: ${rhythm(2 / 5)};
  }
  .card-content {
    padding-bottom: 0;
    padding-top: 0;
    display: flex;
    flex-direction: column;
  }
  .card-content {
  }
  :hover {
    background: #0097fe none repeat scroll 0 0;
    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2);
    color: #fff;
    h1 {
      color: #fff;
    }
  }
  height: 100%;
  transition: box-shadow 0.2s ease-in-out;
`;

const StyledTime = styled.time`
  align-self: flex-end;
  font-size: ${rhythm(1 / 2)};
`;

const BlogCard = ({ blog }) => {
  const {
    fields: { slug },
    frontmatter: { title, date, attachments, shortDescription },
  } = blog;
  const formattedDate = format(new Date(date), 'MMM D, YYYY');

  return (
    <Link to={slug}>
      <StyledCard>
        <Card.Image size="4by3" src={attachments[0].publicURL} />
        <Card.Content>
          <StyledTime dateTime={date}>{formattedDate}</StyledTime>
          <h1>{title}</h1>
          <p>{shortDescription}</p>
        </Card.Content>
      </StyledCard>
    </Link>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.array.isRequired,
      date: PropTypes.string.isRequired,
      attachments: PropTypes.arrayOf(PropTypes.object).isRequired,
      shortDescription: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default BlogCard;
