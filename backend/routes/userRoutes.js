const express = require('express');
const { home } = require('./../controllers/userController')
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({msg: 'Connected'})
})

router.get('/home', home)

module.exports = router