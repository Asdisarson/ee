const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Database simulation (JSON file)
const DB_PATH = path.join(__dirname, '../data/db.json');

// Initialize database if it doesn't exist
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify({
    users: {}
  }));
}

// Load database
const loadDb = () => {
  return JSON.parse(fs.readFileSync(DB_PATH));
};

// Save database
const saveDb = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

// API key middleware
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }

  const db = loadDb();
  const user = db.users[apiKey];

  if (!user) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  req.user = user;
  next();
};

// Routes
app.post('/api/register', (req, res) => {
  const { woocommerce_ck, woocommerce_cs, dkplus_api_key, website_url } = req.body;

  if (!woocommerce_ck || !woocommerce_cs || !dkplus_api_key || !website_url) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = uuidv4();
  const db = loadDb();

  db.users[apiKey] = {
    woocommerce_ck,
    woocommerce_cs,
    dkplus_api_key,
    website_url,
    created_at: new Date().toISOString()
  };

  saveDb(db);

  res.json({ 
    apiKey,
    message: 'Registration successful' 
  });
});

// Protected routes
app.use('/api/webhook', authenticateApiKey);
app.use('/api/woocommerce', authenticateApiKey);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 