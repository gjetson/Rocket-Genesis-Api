const RegionController = require('../features/region/region-controller')

const registerRegionRoutes = (app) => {
    app.post('/region-create', RegionController.createRegion)
    app.get('/region/:region', RegionController.getRegions)
    app.get('/all-stars/:region', RegionController.getAllStars)
}

const dup_key = (error, doc, next) => {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('There was a duplicate key error'))
    } else {
        next()
    }
}

module.exports = { registerRegionRoutes }