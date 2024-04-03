module.exports = {
    ...require('./auth'),
    ...require('./poll')
}

module.exports.notFound = (req, res, next) => {
    const err = new Error('not Found!')
    err.status = 404

    next(err)
}

module.exports.errors = (err, req, res, next) => {
    res.status( err.status || 400 ).json({ error: err.message || "Someting went wrong"})
}