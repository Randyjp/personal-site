import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';
import styled from 'styled-components';
import { StyledH2 } from '../styles/common';

const StyledTime = styled.time`
  align-self: flex-end;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const StyledCard = styled.div`
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: ${props => props.theme.Colors.grayScale.black};
  height: 100%;
  /* max-width: 100%; */
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease-in-out;
  /* position: relative; */

  display: flex;

  :hover {
    background: ${props => props.theme.Colors.blue.light2} none repeat scroll 0
      0;
    box-shadow: ${props => props.theme.Shadows.box.cardBasic};
    color: ${props => props.theme.Colors.grayScale.white};
    h2 {
      color: ${props => props.theme.Colors.grayScale.white};
    }
  }
`;

const StyledCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* position: relative; */
  flex: 0 1 auto;
`;

const StyledFigure = styled.div`
  /* max-height: 33%; */
  padding-top: 75%;
  position: relative;
  /* overflow: hidden; */
  /* height: 0; */
  width: 100%;
  flex: 0 1 auto;

  figure {
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    left: 0;
  }
  img {
    height: 100%;
    /* display: block; */
    /* position: relative; */
    /* left: 0; */
    /* object-fit: contain; */
    width: 100%;
  }
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const Image = ({ imageSrc, imgAtl }) => (
  <StyledFigure>
    <figure>
      <img src={imageSrc} alt={imgAtl} />
    </figure>
  </StyledFigure>
);

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imgAtl: PropTypes.string,
};

Image.defaultProps = {
  imgAtl: 'Card Image',
};

const Content = ({ children }) => (
  <StyledCardContent>{children}</StyledCardContent>
);

Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Card.Image = Image;
Card.Content = Content;

const BlogCard = ({ blog }) => {
  const {
    fields: { slug },
    frontmatter: { title, date, attachments, shortDescription },
  } = blog;
  const formattedDate = format(parse(date), 'MMM D, YYYY');
  return (
    <Link to={slug}>
      <Card>
        <Card.Image imageSrc={attachments[0].publicURL} />
        <Card.Content>
          <StyledTime dateTime={date}>{formattedDate}</StyledTime>
          <StyledH2>{title}</StyledH2>
          <p>{shortDescription}</p>
        </Card.Content>
      </Card>
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
