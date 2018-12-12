require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Randy Perez professional site and personal blog.',
    subtitle: 'My thoughts about software development',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
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
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-smartypants',
    'gatsby-plugin-sass',
  ],
};
