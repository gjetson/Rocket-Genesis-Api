const AgentController = require('../features/agent/agent-controller')

const registerAgentRoutes = (app) => {
    app.post('/agent-create', AgentController.createAgent)
    app.get('/agents', AgentController.getAgents)
    app.get('/agents-by-region', AgentController.getAgentsByRegion)
    app.patch('/agents-update-info/:id', AgentController.updateAgents)
    app.delete('/agent-delete/:id', AgentController.deleteAgent)
}

module.exports = { registerAgentRoutes }