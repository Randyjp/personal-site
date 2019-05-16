import React from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';

const Comments = ({ url, slug, title }) => {
  const config = {
    url,
    title,
    identifier: slug,
  };
  return <DiscussionEmbed shortname="https-randyperez-tech" config={config} />;
};

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments;
