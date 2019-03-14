const express = require('express')
const trees = require('./trees')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    rootUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.send({
        '_links': {
            'trees': rootUrl + 'trees',
            'tree': rootUrl + 'trees/id'
        }
    })
})

app.get('/trees', (req, res) => res.send(trees))

app.get('/trees/:id', (req, res) => {
    filteredTrees = trees.filter(t => t.id == req.params.id)
    if (filteredTrees.length == 0) res.sendStatus(404)
    else res.status(200).send(filteredTrees[0])
})

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app