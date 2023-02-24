const Region = require('../../shared/db/models/region-model')
const { getTotalSales } = require('../agent/utils')

const createRegion = async (req, res) => {
    try {
        const total = await getTotalSales(req.body.region)
        req.body.total_sales = total[0].sum
        const region = await Region.create(req.body)
        res.status(201).json({ data: region })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: err })
    }
}

const getRegions = async (req, res) => {
    try {
        const regions = await Region.find({}).populate('top_agents').populate('manager')
        res.status(200).json({ data: regions })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: err })
    }
}

const getAllStars = async (req, res) => {
    try {
        const region = await Region.find({ region: req.params.region }).populate('top_agents')
        console.log(region)
        const stars = region[0].top_agents.sort((a, b) => (a.sales > b.sales) ? -1 : 1)
        res.status(200).json({ data: stars[0] })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: err })
    }
}


module.exports = { createRegion, getRegions, getAllStars }