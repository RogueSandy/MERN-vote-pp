const router = require('express').Router()

const handle = require('../controllers')

router.post('/Register', handle.register)
router.post('/login', handle.login)

module.exports = router