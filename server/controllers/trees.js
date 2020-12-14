const fs = require('fs')

exports.getAllTrees = async(req, res, next) => {
    try {
        let jsonString = fs.readFileSync('./db/trees.json')
        let allTrees = JSON.parse(jsonString)
        res.status(200).send(allTrees)
    } catch (err) {
        console.log(err)
        return
    }
}