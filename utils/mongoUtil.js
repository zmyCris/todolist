const dbUrl = require("./config").dbUrl;
const mongoClient = require('mongodb').MongoClient;


const client = new mongoClient(dbUrl, {
  useNewUrlParser: true
});

module.exports = client;