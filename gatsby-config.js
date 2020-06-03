module.exports = {
  siteMetadata: {
    title: "Joe Turner's Portfolio",
    author: "Joe Turner",
    image: `src/images/site-pic.png`,
    imageUrl: "src/images/site-pic.png",
    description: "Portfolio page for my projects",
    keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,

    gatsby: "https://www.gatsbyjs.org/",
    bulma: "https://bulma.io/",
    siteUrl: `https://www.example.com`,
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Makefolio",
        short_name: "Makefolio",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/gatsby-icon.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
