const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    uri: {
        type: String,
        required: true
    }
});

const musicModel = mongoose.model('Music', musicSchema);

module.exports = musicModel;