const createAgent = async (req, res) => {
    res.send('Create agent...')
}

const getAgents = async (req, res) => {
    res.send('Get agents...')
}

const getAgentsByRegion = async (req, res) => {
    res.send('Get agents by region...')
}

const updateAgents = async (req, res) => {
    res.send('Get agents by region...')
}

const deleteAgent = async (req, res) => {
    res.send('Delete agent...')
}

module.exports = { createAgent, getAgents, getAgentsByRegion, updateAgents, deleteAgent }