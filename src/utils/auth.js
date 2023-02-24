const isAuth = (req, res, next) => {
    const auth = req.headers.authorization
    if (auth === 'rocket') {
        next()
    } else {
        res.status(401)
        res.send('Access forbidden')
    }
}

module.exports = { isAuth }