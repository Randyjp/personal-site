import React from 'react';
import { Link } from 'gatsby';
import Icon from 'react-bulma-components/lib/components/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isExternalLink } from '../utils/utils';

const FaIcon = ({ icon, iconSize, IconName, url, color, containerSize }) => {
  const name = IconName ? <span>{IconName}</span> : null;
  if (isExternalLink) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon size={containerSize}>
          <FontAwesomeIcon icon={icon} size={iconSize} color={color} />
          {name}
        </Icon>
      </a>
    );
  }

  return (
    <Link className="navbar-item" activeClassName="is-active" to={url}>
      {/* adds classname navbar-item to use bulma styles on gatsby links */}
      <Icon size={containerSize}>
        <FontAwesomeIcon icon={icon} size={iconSize} color={color} />
      </Icon>
      {name}
    </Link>
  );
};

export default FaIcon;
