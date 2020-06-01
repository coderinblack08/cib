const monk = require('monk');
const MONGODB_URI = process.env.MONGODB_URI;
const db = monk(MONGODB_URI);

module.exports = db;