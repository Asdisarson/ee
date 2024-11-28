require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  woocommerce: {
    url: process.env.WOOCOMMERCE_URL,
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET
  },
  dkPlus: {
    apiKey: process.env.DK_PLUS_API_KEY,
    baseUrl: 'https://api.dkplus.is'
  }
}; 