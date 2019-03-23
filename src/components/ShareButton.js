import React from 'react';
import PropTypes from 'prop-types';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';

const ShareButton = ({ title, slug, baseUrl, platform }) => {
  const url = `${baseUrl}${slug}`;
  let UI = null;

  switch (platform) {
    case 'facebook':
      UI = (
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      );
      break;
    case 'twitter':
      UI = (
        <TwitterShareButton url={url} title={title} via="randy_perez">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      );
      break;
    case 'reddit':
      UI = (
        <RedditShareButton url={url} title={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>
      );
      break;
    case 'linkedin':
      UI = (
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      );
      break;
    default:
      break;
  }

  return UI;
};

ShareButton.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
  platform: PropTypes.string,
};

ShareButton.defaultProps = {
  baseUrl: 'https://randyperez.tech',
  platform: 'twitter',
};

export default ShareButton;
