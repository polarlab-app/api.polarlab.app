const { Schema, model } = require('mongoose');

const apiKeys = new Schema(
 {
   keys: [String],
 },
 {
   collection: 'keys',
 }
);

module.exports = model('apiKeys', apiKeys);