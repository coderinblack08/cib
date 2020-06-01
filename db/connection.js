const monk = require('monk');
const MOGODB_URI = process.env.MONGODB_URI;
const db = monk(MOGODB_URI);

module.exports = db;