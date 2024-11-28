const fs = require('fs');
const path = require('path');
const config = require('../config');

class Database {
  constructor() {
    this.dbPath = config.dbPath;
    this.initializeDb();
  }

  initializeDb() {
    const dir = path.dirname(this.dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (!fs.existsSync(this.dbPath)) {
      fs.writeFileSync(this.dbPath, JSON.stringify({ users: {} }));
    }
  }

  load() {
    return JSON.parse(fs.readFileSync(this.dbPath));
  }

  save(data) {
    fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2));
  }

  getUser(apiKey) {
    const db = this.load();
    return db.users[apiKey];
  }

  saveUser(apiKey, userData) {
    const db = this.load();
    db.users[apiKey] = userData;
    this.save(db);
  }
}

module.exports = new Database(); 