import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Icon from 'react-bulma-components/lib/components/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isExternalLink } from '../utils/utils';

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
  if (isExternalLink(url)) {
    return (
      <a
        className={cssClass}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={containerSize}>
          <FontAwesomeIcon icon={icon} size={iconSize} color={color} />
        </Icon>
        {name}
      </a>
    );
  }

  return (
    <Link className={cssClass} activeClassName="is-active" to={url}>
      {/* adds classname navbar-item to use bulma styles on gatsby links */}
      <Icon size={containerSize}>
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
  containerSize: 'auto',
  iconSize: '1x',
  cssClass: null,
};

export default FaIcon;
