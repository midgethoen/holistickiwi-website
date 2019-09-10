module.exports = {
  siteMetadata: {
    title: `Holistic Kiwi - Skin & Massage`,
    description: `A Holistic Fruits Inc. company`,
    author: `Kitty Bradley`,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/content/pages/`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
        //   pages: require.resolve("./src/templates/default.js"),
          default: require.resolve("./src/templates/default.js"),
        },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-plugin-markdown-pages',
    //   options: {
    //     path: './content/pages', // Path to markdown files to be converted to pages
    //     templatePath: './src/templates', // Path to page templates
    //     template: 'default', // Default template to use if none is supplied
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `holistic-kiwi`,
        short_name: `holistic-kiwi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
