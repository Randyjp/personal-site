require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Randy Perez professional site and personal blog.',
    subtitle: 'My thoughts on software development and assorted topics.',
    siteUrl: 'http://randyperez.tech',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: `margin-bottom: 1.rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description: subtitle
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  author: edge.node.frontmatter.author[0],
                  description: edge.node.frontmatter.shortDescription,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ),

            query: `
            {
              allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
            ) {
            edges {
              node {
                html
                frontmatter {
                  author
                  title
                  date
                  shortDescription
                }
                fields {
                  slug
                }
              }
            }
          }
        }
        `,
            output: 'rss.xml',
            title: 'Randy Perez Blog RSS Feed.',
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
  ],
};
