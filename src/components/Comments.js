import React from 'react';
import Proptypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import Columns from 'react-bulma-components/lib/components/columns';
import BasicLayout from './BasicLayout';

const Comments = ({ url, slug, title }) => {
  const config = {
    url,
    title,
    identifier: slug,
  };
  return (
    <BasicLayout
      includeNav={false}
      render={() => (
        <Columns.Column>
          <DiscussionEmbed shortname="https-randyperez-tech" config={config} />
        </Columns.Column>
      )}
    />
  );
};

Comments.propTypes = {
  url: Proptypes.string.isRequired,
  slug: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};

export default Comments;
