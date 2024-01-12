const express = require('express');
const router = express.Router();
const facts = require('../../schemas/facts');

router.get('/', async (req, res) => {
    try {
      const randomFact = await facts.aggregate([{ $sample: { size: 1 } }]);
      res.json(randomFact[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
   });

module.exports = router;