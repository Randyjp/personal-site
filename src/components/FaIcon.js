import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isExternalLink } from '../utils/utils';

const Icon = styled.span`
  align-items: center;
  display: inline-flex;
  height: ${props => props.dimensions.height};
  justify-content: center;
  width: ${props => props.dimensions.width};
`;

function getDimensions(containerSize) {
  switch (containerSize) {
    case 'small':
      return { height: '1.5rem', width: '1.5rem' };

    case 'medium':
      return { height: '2rem', width: '2rem' };

    case 'large':
      return { height: '4.5rem', width: '4.5rem' };

    default:
      return { height: '1.5rem', width: '1.5rem' };
  }
}

const FaIcon = ({
  icon,
  iconSize,
  displayName,
  url,
  color,
  containerSize,
  cssClass,
}) => {
  const name = displayName ? <span>{displayName}</span> : null;
  const dimensions = getDimensions(containerSize);

  if (isExternalLink(url)) {
    return (
      <OutboundLink
        className={cssClass}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon dimensions={dimensions}>
          <FontAwesomeIcon icon={icon} size={iconSize} color={color} />
        </Icon>
        {name}
      </OutboundLink>
    );
  }

  return (
    <Link className={cssClass} activeClassName="is-active" to={url}>
      <Icon dimensions={dimensions}>
        <FontAwesomeIcon icon={icon} size={iconSize} color={color} />
      </Icon>
      {name}
    </Link>
  );
};

FaIcon.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.array.isRequired,
    iconName: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
  }).isRequired,
  iconSize: PropTypes.string,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  containerSize: PropTypes.string,
  displayName: PropTypes.string,
  cssClass: PropTypes.string,
};

FaIcon.defaultProps = {
  displayName: null,
  containerSize: 'small',
  iconSize: '1x',
  cssClass: null,
};

export default FaIcon;
