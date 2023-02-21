const createAgent = async (req, res) => {
    res.status(201).send('Create agent...')
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