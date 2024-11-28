const axios = require('axios');
const config = require('../config/config');

const dkPlusApi = axios.create({
  baseURL: config.dkPlus.baseUrl,
  headers: {
    'Authorization': `Bearer ${config.dkPlus.apiKey}`,
    'Content-Type': 'application/json'
  }
});

module.exports = dkPlusApi; 