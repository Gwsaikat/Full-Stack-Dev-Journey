const express = require('express')
const app = express()

const noteModel = require('./ModelDB/note.model')

// Middleware
app.use(express.json())

// CREATE NOTE
app.post('/notes', async (req, res) => {
    try {
        const { title, description } = req.body

        const newNote = await noteModel.create({
            title,
            description
        })

        res.status(201).json({
            message: "Note successfully created",
            note: newNote
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating note",
            error: error.message
        })
    }
})


// GET ALL NOTES
app.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find()

        res.status(200).json({
            message: "Notes fetched successfully",
            notes: notes
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching notes",
            error: error.message
        })
    }
})


// UPDATE NOTE
app.patch('/notes/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { description } = req.body

        const updatedNote = await noteModel.findByIdAndUpdate(
            id,
            { description },
            { new: true }
        )

        if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found"
            })
        }

        res.status(200).json({
            message: "Note successfully updated",
            note: updatedNote
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating note",
            error: error.message
        })
    }
})


// DELETE NOTE
app.delete('/notes/:id', async (req, res) => {
    try {
        const id = req.params.id

        const deletedNote = await noteModel.findByIdAndDelete(id)

        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found"
            })
        }

        res.status(200).json({
            message: "Note successfully deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting note",
            error: error.message
        })
    }
})

module.exports = app