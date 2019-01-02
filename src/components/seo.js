import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const siteDetailsQuery = graphql`
  query SiteDetailsQuery {
    site {
      siteMetadata {
        title
        subtitle
        author
      }
    }
  }
`;
const SEO = ({ description, lang, title, meta, keywords }) => (
  <StaticQuery
    query={siteDetailsQuery}
    render={data => {
      const { title: siteTitle, subtitle, author } = data.site.siteMetadata;
      const metaDescription = description || subtitle;

      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          titleTemplate={`%s | ${siteTitle}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.string),
  keywords: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;
