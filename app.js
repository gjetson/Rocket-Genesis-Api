// Initial dependencies and definitions
const Express = require('express')
const expressWinston = require('express-winston')
const winston = require('winston') // for transports.Console
const MongoManager = require('./src/shared/db/mongodb/mongo-manager')

require('dotenv').config()
//console.log(process.env)

const app = Express()
const port = process.env.PORT || 3004

// import routes
const HealthRoutes = require('./src/routes/health.routes')
const AgentRoutes = require('./src/routes/agent-routes')
const RegionRoutes = require('./src/routes/region-routes')

app.use(Express.json())

if (process.env.LOG === '1') {
    console.log('winston log enabled...')
    app.use(expressWinston.logger({
        transports: [
            new winston.transports.Console({
                json: true,
                colorize: true
            })
        ]
    }))
}

HealthRoutes.registerHealthRoutes(app)
AgentRoutes.registerAgentRoutes(app)
RegionRoutes.registerRegionRoutes(app)

MongoManager.openMongoConnection(process.env.MONGO_URI)

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})