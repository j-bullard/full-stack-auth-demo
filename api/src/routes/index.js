var express = require('express')
const { authGuard } = require('../middleware/jwt')
var router = express.Router()

/* GET home page. */
router.get('/', authGuard, function (_req, res) {
  res.status(200).json({ message: 'Welcome to the API' })
})

module.exports = router
