module.exports = {
  siteMetadata: {
    title: `Strategiepark`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@NicolasMegow`,
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
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Strategiepark`,
        short_name: `Strategiepark`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/Favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
