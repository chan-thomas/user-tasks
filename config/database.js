const mongoDB_URL = process.env.MONGO_DB_URL || "mongodb://localhost:27017/test"

module.exports = {
    mongoURI: mongoDB_URL
  };
  