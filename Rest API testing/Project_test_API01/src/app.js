
const express = require('express')
const app = express()
app.use(express.json()) // it's a middleware to convert the req.body to json format

const notes = []

app.post('/notes', (req,res)=>{
    notes.push(req.body)
    res.status(201).json({message : "note successfully created"})
})

app.get('/notes', (req,res)=>{
    res.status(200).json({
        message: "note successfully fetched",
        notes: notes
    })
})

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const description = req.body.Description

    if (!notes[index]) {
        return res.status(404).json({ message: "Note not found" })
    }

    notes[index].description = description

    res.status(200).json({
        message: "note successfully updated"
    })
})

app.delete('/notes/:index', (req, res) => {
    const index = req.params.index

    if (!notes[index]) {
        return res.status(404).json({
            message: "Note not found"
        })
    }

    notes.splice(index, 1) // removes 1 element at that index

    res.status(200).json({
        message: "Note successfully deleted"
    })
})

module.exports = app