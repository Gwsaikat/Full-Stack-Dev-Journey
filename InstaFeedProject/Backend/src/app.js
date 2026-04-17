const express = require('express')
const app = express()
const postModel = require('./ModelDB/post.model')
const multer = require('multer')
const cors = require('cors')
const uploadFile = require('./Services/storage.services')

// Middleware
app.use(cors())
app.use(express.json())
const upload = multer({ storage: multer.memoryStorage() })

// CREATE post
app.post('/create-posts', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Image file is required"
            })
        }

        const result = await uploadFile(req.file.buffer)
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption,
        })

        res.status(201).json({
            message: "Post successfully created",
            post
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating post",
            error: error.message
        })
    }
})


// GET ALL Posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await postModel.find()

        res.status(200).json({
            message: "Posts fetched successfully",
            posts
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching posts",
            error: error.message
        })
    }
})

module.exports = app