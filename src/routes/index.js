const express = require('express');
const { v4: uuidv4 } = require('uuid');
const db = require('../db');
const WebHooksApi = require('../api/WebHooksApi');
const ApiClient = require('../ApiClient');

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { woocommerce_ck, woocommerce_cs, dkplus_api_key, website_url } = req.body;

    if (!woocommerce_ck || !woocommerce_cs || !dkplus_api_key || !website_url) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate new API key for this registration
    const apiKey = '1234567890';
    
    // Store the registration data
    db.saveUser(apiKey, {
      woocommerce_ck,
      woocommerce_cs,
      dkplus_api_key,
      website_url,
      created_at: new Date().toISOString()
    });

    // Create DK Plus webhook
    const apiClient = new ApiClient();
    apiClient.defaultHeaders = {
      'Authorization': `Bearer ${dkplus_api_key}`
    };
    
    const webhooksApi = new WebHooksApi(apiClient);
    const webhookUrl = `https://aqueous-lake-29596-fb9117cc06ee.herokuapp.com/api/webhook/dkplus/${apiKey}`;
    
    const webhookData = {
      description: `WooCommerce Integration - ${website_url}`,
      url: webhookUrl,
      options: {
        enabled: true,
        product: true,
        customer: false,
        member: false,
        vendor: false,
        project: false,
        timeClock: false,
        employee: false,
        generalLedgerTransactions: false
      },
      failureEmail: ""
    };

    await webhooksApi.webHooksCreateWebhook(webhookData);

    res.json({ 
      apiKey,
      message: 'Registration successful'
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router; 