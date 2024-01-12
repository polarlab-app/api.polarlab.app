const express = require('express');
const app = express();
const port = 4000;
const registerRoutes = require('./registerRoutes');

registerRoutes(app);

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`);
});