const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    // creates the slugs based on the file name
    const slug = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        './_variables.sass': path.resolve(__dirname, 'src/_variables.sass')
      },
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            // data passed here will be availble for the template for page queries
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
