const express = require('express');
const { recommendations } = require('../controllers/recommendationsController');
const router = express.Router();

const PATH_RECOMMENDATIONS = '/recommendations';

router.post(`${PATH_RECOMMENDATIONS}`, recommendations);

module.exports = router;