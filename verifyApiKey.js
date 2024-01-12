const apiKeys = require('./schemas/keys');

module.exports = async (req, res, next) => {
 const apiKey = req.headers['x-api-key'];
 const keysDoc = await apiKeys.findOne();
 if (!keysDoc || !keysDoc.keys.includes(apiKey)) {
   res.status(403).json({ message: 'Imagine having an invalid API key lmao, what are you doing' });
 } else {
   next();
 }
};