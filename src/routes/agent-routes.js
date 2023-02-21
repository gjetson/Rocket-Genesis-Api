const AgentController = require('../features/agent/agent-controller')

const registerAgentRoutes = (app) => {
    app.post('/agent-create', AgentController.createAgent)
    app.get('/agents', AgentController.getAgents)
    app.get('/agents-by-region', AgentController.getAgentsByRegion)
    app.put('/agents-update-info', AgentController.updateAgents)
    app.post('/agent-delete', AgentController.deleteAgent)
}

module.exports = { registerAgentRoutes }