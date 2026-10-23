import express from 'express'
import { writeFile } from 'node:fs/promises'
import jrpgs from './data/jrpgs.json' with { type: "json"}

const PORT = 8080
const app = express()

app.use(logger)
app.use(express.json())

app.get('/', (req, res) => {
    const limit = req.query.limit
    console.log(limit)
    if (limit) {
        const erg = jrpgs.slice(0, +limit)
        res.json(erg)
    }
    res.json(jrpgs)
})
app.post('/', (req, res) => {

    const newGame = req.body
    jrpgs.push(newGame)
    writeFile('./data/jrpgs.json', JSON.stringify(jrpgs, null, 2))

    res.json(req.body)
})

app.delete('/:id', (req, res) => {
    const id = req.params.id
    const freshJrpgs = jrpgs.filter((ele) => ele.id != id)
    writeFile('./data/jrpgs.json', JSON.stringify(freshJrpgs, null, 2))
    res.json(freshJrpgs)
})
// Eine eigene Middleware ist nicht schwer. Wichitg die funktion next() muss am ende aufgerufen werden damit der req weitergeleitet wird
function logger(req, res, next) {

    console.log(`${req.url}  ${req.method}`)
    next()
}

app.listen(PORT, () => console.log(`SuperServer lauscht auf Port ${PORT}`))