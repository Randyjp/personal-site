const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const createPaginatedPages = require('gatsby-paginate');

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
        './_variables.sass': path.resolve(__dirname, 'src/_variables.sass'),
      },
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                author
                date
                attachments {
                  publicURL
                }
              }
              fields {
                slug
              }
              timeToRead
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      const blogPosts = result.data.allMarkdownRemark.edges;

      blogPosts.forEach(({ node }, index) => {
        const previous = index > 0 ? blogPosts[index - 1].node : null;
        const next =
          blogPosts.length - (index + 1) > 0 ? blogPosts[index + 1].node : null;
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            // data passed here will be availble for the template for page queries
            slug: node.fields.slug,
            previous,
            next,
          },
        });
      });
      createPaginatedPages({
        edges: blogPosts,
        createPage,
        pageTemplate: './src/templates/blog-list.js',
        pageLength: 6,
        pathPrefix: 'blog-list',
      });
      resolve();
    });
  });
};
