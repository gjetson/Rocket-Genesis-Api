const AgentModel = require('../../shared/db/models/agent-model')

const createAgent = async (req, res) => {
    try {
        const agent = await AgentModel.create(req.body)
        res.status(201).json({ data: agent })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: err })
    }
}

const getAgents = async (req, res) => {
    res.status(200).send('Get agents...')
}

const getAgentsByRegion = async (req, res) => {
    res.status(200).send('Get agents by region...')
}

const updateAgents = async (req, res) => {
    res.status(200).send('Update agents...')
}

const deleteAgent = async (req, res) => {
    res.status(200).send('Delete agent...')
}

module.exports = { createAgent, getAgents, getAgentsByRegion, updateAgents, deleteAgent }