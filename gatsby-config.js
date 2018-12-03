require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Randy Perez professional site and personal blog.',
    subtitle: 'My thoughts about software development',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WP_URL,
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        auth: {
          htaccess_user: process.env.WP_USERNAME,
          htaccess_pass: process.env.WP_PASSWORD,
          htaccess_sendImmediately: false,
        },
      },
    },
  ],
};
