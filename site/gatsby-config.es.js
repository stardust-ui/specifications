import images from 'remark-images'
import emoji from 'remark-emoji'

module.exports = {
  siteMetadata: {
    title: 'Open UI',
    description: 'Open UI ',
    author: 'Open UI',
    githubURL: 'https://github.com/stardust-ui/specifications',
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages` },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`,
        },
        remarkPlugins: [images, emoji],
      },
    },

    'gatsby-plugin-sharp',

    'gatsby-transformer-sharp',

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/logo-green.png',
      },
    },

    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Open UI',
        short_name: 'OUI',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#00a453',
        display: 'minimal-ui',
        icon: 'src/images/logo-green.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-remove-trailing-slashes',

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
