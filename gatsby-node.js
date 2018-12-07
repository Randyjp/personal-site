const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
// I just need to chain more then's to the promise in
// order to create pages for other wordpress content types.
// example --> https://github.com/GatsbyCentral/gatsby-starter-wordpress/blob/master/gatsby-node.js
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allWordpressPost {
//           edges {
//             node {
//               id
//               slug
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allWordpressPost.edges.forEach(({ node }) => {
//         createPage({
//           path: node.slug,
//           component: path.resolve('./src/templates/post.js'),
//           context: {
//             id: node.id,
//           },
//         });
//         resolve();
//       });
//     });
//   });
// };

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    // creates the slugs based on the file name
    const slug = createFilePath({ node, getNode, basePath: 'content' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// exports.onCreateWebpackConfig = ({
//   stage,
//   getConfig,
//   rules,
//   loaders,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         './_variables.sass': path.resolve(__dirname, 'src')
//       },
//     },
//   });
// };
