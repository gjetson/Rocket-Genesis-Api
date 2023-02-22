const AgentModel = require('../../shared/db/models/agent-model')
const { filterUpdates } = require('./utils')

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
    try {
        const agents = await AgentModel.find({}).sort({ last_name: 1 })
        res.status(201).json({ data: agents })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: err })
    }
}

const getAgentsByRegion = async (req, res) => {
    try {
        const agents = await AgentModel.find({ region: req.query.region }).sort({ rating: 1 })
        res.status(201).json({ data: agents })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: err })
    }
}

const updateAgents = async (req, res) => {
    try {
        const allowed = filterUpdates(req.body)
        console.log(req.params.id)
        const agent = await AgentModel.findByIdAndUpdate(
            { _id: req.params.id },
            allowed,
            { new: true, upsert: false })
        if (agent) {
            res.status(200).json({ data: agent })
        }
        else {
            res.status(404).json({ err: `Data not found for id: ${req.params.id}` })
        }
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: err })
    }
}

const deleteAgent = async (req, res) => {
    try {
        console.log(req.params.id)
        const agent = await AgentModel.findByIdAndDelete(req.params.id)
        console.log("agent: ", agent)
        if (agent) {
            res.status(200).json({ data: agent })
        }
        else {
            res.status(404).json({ err: `Data not found for id: ${req.params.id}` })
        }
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: err })
    }
}

module.exports = { createAgent, getAgents, getAgentsByRegion, updateAgents, deleteAgent }