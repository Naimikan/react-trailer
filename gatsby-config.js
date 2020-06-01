module.exports = {
  plugins: [
    'gatsby-theme-docz',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-168112279-1',
      },
    },
  ],
};
