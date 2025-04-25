const express = require('express');
const { recommendations } = require('../controllers/recommendationsController');
const router = express.Router();

const PATH_RECOMMENDATIONS = '/recommendations';

router.get(`${PATH_RECOMMENDATIONS}/:id`, recommendations);

module.exports = router;