require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.DB_URL;

mongoose.connect(URL || '', {
    authSource: 'admin',
});
