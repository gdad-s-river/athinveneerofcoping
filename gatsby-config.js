module.exports = {
  siteMetadata: {
    title: "A Thin Veneer Of Coping — Album by Rochelle D'Silva",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'A Thin Veneer Of Coping',
        short_name: `Poetry Album`,
        start_url: '/',
        background_color: '#c589ba',
        theme_color: '#8465ac',
        display: 'minimal-ui',
        icon: 'src/assets/images/cover.jpg',
      },
    },
		`gatsby-plugin-sass`,
		`gatsby-plugin-sitemap`
    'gatsby-plugin-offline',
  ],
}
