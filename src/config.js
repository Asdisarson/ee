const config = {
  port: process.env.PORT || 3000,
  dbPath: process.env.DB_PATH || './data/db.json',
  rateLimitWindow: 15 * 60 * 1000, // 15 minutes
  rateLimitMax: 100 // 100 requests per window
};

module.exports = config; 