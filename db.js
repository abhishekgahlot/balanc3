const { MongoClient } = require('mongodb');
const { to } = require('await-to-js');
const { db } = require('./config');


async function ensureIndex(dbWrapper) {
  const [err, indexes] = await to(dbWrapper.collection(db.collection).createIndex(db.index, { unique: true }));
  if (err) throw new Error('MongoDB Indexing failed.');
  return indexes;
}

async function connectToMongo() {
  const [err, dbWrapper] = await to(MongoClient.connect(db.url, { useNewUrlParser: true }));
  if (err) throw new Error('MongoDB connection failed.');
  await ensureIndex(dbWrapper.db(db.name));
  return dbWrapper.db(db.name);
}

module.exports = {
  connectToMongo,
  ensureIndex,
};
