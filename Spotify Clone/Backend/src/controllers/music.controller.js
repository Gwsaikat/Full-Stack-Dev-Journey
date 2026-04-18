
const userModel = require('../Models/user.model');
const musicModel = require('../Models/music.model');
const jwt = require('jsonwebtoken');
const { uploadFile } = require('../service/storage.service');

const createMusic = async (req, res) => {
    try {
        const { title, artist } = req.body;
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const result = await uploadFile(file.buffer.toString('base64'));

        const music = await musicModel.create({ title, artist, fileUrl: result.url });

        res.status(201).json({ message: 'Music created successfully', music });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create music', error });
    }
}

const getAllMusic = async (req, res) => {
    try {
        const music = await musicModel
            .find()
            .limit(3)
            .populate('artist', 'email');

        res.status(200).json({ message: 'Music fetched successfully', music });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch music', error });
    }
}

const createAlbum = async (req, res) => {
    try {
        const { title, artist } = req.body;

        const album = await albumModel.create({ title, artist: req.user.id, music: music });

        res.status(201).json({ message: 'Album created successfully', album });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create album', error });
    }
}

const getAllAlbum = async (req, res) => {
    try {
        const album = await albumModel
            .find()
            .limit(3)
            .populate('artist', 'email');

        res.status(200).json({ message: 'Album fetched successfully', album });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch album', error });
    }
}
module.exports = { createMusic, getAllMusic, createAlbum, getAllAlbum };