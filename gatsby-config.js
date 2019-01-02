module.exports = {
  siteMetadata: {
    title: `Open Doors Evangelistic Ministries`,
    description: `ODEM is a non-profit organization that is bringing the Gospel to the nations. ODEM encourages church leadership to move outside of the wall of their church.`,
    author: `scottmo223`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ODEM Missions`,
        short_name: `ODEM`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/open_doors_logo_globe.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
     'gatsby-plugin-offline',
  ],
}
