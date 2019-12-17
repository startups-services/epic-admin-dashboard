const withImages = require('next-images');
const withCss = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCss(withImages({
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    graphcms_pat: process.env.graphcms_pat,
    graphcms_endpoint: process.env.graphcms_endpoint,
  },
}));
