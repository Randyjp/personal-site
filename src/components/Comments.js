import React from 'react';
import {DiscussionEmbed} from 'disqus-react';
import Columns from 'react-bulma-components/lib/components/columns';
import BasicLayout from '../components/BasicLayout';

const Comments = ({url, slug, title}) => {
    const config = {
        url,
        title,
        identifier: slug,
    };
    return (
        <BasicLayout includeNav={false} render={()=> (
            <Columns.Column>
                <DiscussionEmbed shortname='https-randyperez-tech' config={config} />
            </Columns.Column>
        )}/>
        );
};

export default Comments;