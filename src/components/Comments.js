import React from 'react';
import Proptypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';

const Comments = ({ url, slug, title }) => {
  console.log(url);
  const config = {
    url,
    title,
    identifier: slug,
  };
  return <DiscussionEmbed shortname="https-randyperez-tech" config={config} />;
};

Comments.propTypes = {
  url: Proptypes.string.isRequired,
  slug: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};

export default Comments;
