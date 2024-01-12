const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
 const type = req.query.type;
 switch (type) {
   case 'dad':
     res.send('dad joke');
     break;
   case 'regular':
     res.send('Regular Joke');
     break;
   default:
     res.status(400).send('Invalid joke type');
 }
});

module.exports = router;