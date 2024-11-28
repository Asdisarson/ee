const express = require('express');
const router = express.Router();
const DKPlusHandler = require('../handlers/dkplus');
const { authenticateApiKey } = require('../middleware/auth');

// Endpoint that receives webhooks from DK Plus
router.post('/dkplus/:apiKey', authenticateApiKey, async (req, res) => {
    try {
        const user = req.user;
        const handler = new DKPlusHandler(user);
        await handler.handleProductUpdate(req.body);
        res.json({ success: true });
    } catch (error) {
        console.error('DK Plus webhook error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; 