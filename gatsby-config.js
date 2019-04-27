module.exports = {
  siteMetadata: {
    title: `#ArmTangoFest2019`,
    description: `1st International Tango Festival in Armenia`,
    author: `@arthurkhlghatyan`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        name: `ArmTangoFest2019`,
        short_name: `ArmTangoFest2019`,
        start_url: `/`,
        background_color: `#000000b3`,
        theme_color: `#000000b3`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
