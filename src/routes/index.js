const express = require('express');
const { v4: uuidv4 } = require('uuid');
const db = require('../db');
const DKPlusHandler = require('../handlers/dkplus');
const WooCommerceHandler = require('../handlers/woocommerce');

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

    // Return only the necessary data
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