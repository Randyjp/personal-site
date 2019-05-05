import React from 'react';
import { Link } from 'gatsby';
import Card from 'react-bulma-components/lib/components/card';
import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { StyledH2 } from '../styles/common';

const StyledCard = styled(Card)`
  .card-content {
    padding-bottom: 0;
    padding-top: 0;
    display: flex;
    flex-direction: column;
  }
  :hover {
    background: ${({ theme: { Colors } }) => Colors.blue.light2} none repeat
      scroll 0 0;
    box-shadow: ${({ theme: { Shadows } }) => Shadows.box.cardBasic};
    color: ${({ theme: { Colors } }) => Colors.grayScale.white};
    h2 {
      color: ${({ theme: { Colors } }) => Colors.grayScale.white};
    }
  }
  height: 100%;
  transition: box-shadow 0.2s ease-in-out;
`;

const StyledTime = styled.time`
  align-self: flex-end;
  font-size: ${rhythm(1 / 2)};
  margin-bottom: 0.5rem;
`;

const BlogCard = ({ blog }) => {
  const {
    fields: { slug },
    frontmatter: { title, date, attachments, shortDescription },
  } = blog;
  const formattedDate = format(parse(date), 'MMM D, YYYY');

  return (
    <Link to={slug}>
      <StyledCard>
        <Card.Image size="4by3" src={attachments[0].publicURL} />
        <Card.Content>
          <StyledTime dateTime={date}>{formattedDate}</StyledTime>
          <StyledH2>{title}</StyledH2>
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
