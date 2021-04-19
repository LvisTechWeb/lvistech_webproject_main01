// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  siteMetadata: {
    title: `Lvis Tech`,
    siteUrl: `https://www.lvistech.in`,
    description: `Transformation through Disruptive Technologies.`,
    titleTemplate: '%s · Lvis Tech',
    url: `https://www.lvistech.in`, // no trailing slash!
    image: '/images/logo.png',
    owner: 'Lvis Tech',
    twitterUsername: '@lvistech',
    facebookAppID: '',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    }
  ],
}
