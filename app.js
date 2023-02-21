// Initial dependencies and definitions
const Express = require('express');
const MongoManager = require('./src/shared/db/mongodb/mongo-manager')

require('dotenv').config()
console.log(process.env)

const app = Express();
const port = process.env.PORT || 3004;

// Import routes
const HealthRoutes = require('./src/routes/health.routes');

app.use(Express.json());

HealthRoutes.registerHealthRoutes(app);
MongoManager.openMongoConnection(process.env.MONGO_URI);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})