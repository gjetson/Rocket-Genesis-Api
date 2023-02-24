const Agent = require('../../shared/db/models/agent-model')


const filterUpdates = (json) => {
    const result = {}
    for (let key in json) {
        if (key === 'first_name') {
            result[key] = json[key]
        }
        if (key === 'last_name') {
            result[key] = json[key]
        }
        if (key === 'email') {
            result[key] = json[key]
        }
        if (key === 'region') {
            result[key] = json[key]
        }
    }
    // console.log(result)
    return result
}

const getTotalSales = async (region) => {
    try {
        const match = [
            { $match: { region: region } },
            { $group: { _id: "$region", sum: { $sum: "$sales" } } }
        ]
        const sum = await Agent.aggregate(match)
        console.log('sum: ', sum)
        return sum
    } catch (err) {
        console.error(err)
    }
}


module.exports = { filterUpdates, getTotalSales }