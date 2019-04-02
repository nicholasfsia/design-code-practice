module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'e7lar1t53zqs',
        accessToken: '8860865a0cdfa068a712dc8b9765f9b99e1770d65b9f81f111cb8fa290409484'
      }
    }
  ],
}
