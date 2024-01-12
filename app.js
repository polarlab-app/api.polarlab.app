const express = require('express');
const app = express();
const port = 4000;
const registerRoutes = require('./registerRoutes.js');
const verifyApiKey = require('./verifyApiKey.js');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

require('./db.js');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: { content: 'You have made too many requests with your API Key, please try again later.' },
    headers: true,
    keyGenerator: (req) => {
        return req.headers['x-api-key'] ? req.headers['x-api-key'].toLowerCase() : null;
    },
});

app.use((err, req, res, next) => {
    res.status(500).json({ content: err.message });
});
app.use(morgan('combined'));
app.use(apiLimiter);
app.use(verifyApiKey);

registerRoutes(app);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
