const express = require('express');
const router = express.Router();

const quoteController = require('../controllers/quoteController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(quoteController.getQuote));

module.exports = router;
