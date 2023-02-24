const RegionController = require('../features/region/region-controller')
const { isAuth } = require('../utils/auth')

const registerRegionRoutes = (app) => {
    app.post('/region-create', isAuth, RegionController.createRegion)
    app.get('/region/:region', isAuth, RegionController.getRegions)
    app.get('/all-stars', isAuth, RegionController.getAllStars)
}

const dup_key = (error, doc, next) => {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('There was a duplicate key error'))
    } else {
        next()
    }
}

module.exports = { registerRegionRoutes }