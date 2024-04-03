const router = require('express').Router()

const handle = require('../controllers')
const auth = require('../middleware/auth')

router.route('/').get(handle.showPolls)
.post(auth, handle.createPoll)

router.get('/user', auth, handle.userPolls)

router
    .route('/:id')
    .get(handle.getPoll)
    .post(auth, handle.makeVote)
    .delete(auth, handle.deletePoll)

module.exports = router