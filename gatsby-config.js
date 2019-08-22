module.exports = {
  siteMetadata: {
    author: "Luke Zearfoss",
    description: "A personal website created with GatsbyJS.",
    siteUrl: "https://luke.zone",
    title: "Luke Zearfoss"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/website-icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-purgecss"
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-146160300-1"
      }
    }
  ]
};
