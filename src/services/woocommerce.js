const WooCommerceAPI = require('woocommerce-api');
const config = require('../config/config');

const WooCommerce = new WooCommerceAPI({
  url: config.woocommerce.url,
  consumerKey: config.woocommerce.consumerKey,
  consumerSecret: config.woocommerce.consumerSecret,
  version: 'wc/v3'
});

module.exports = WooCommerce; 