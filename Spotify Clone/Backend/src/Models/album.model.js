
const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    uri: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Music',
        required: true
    }
});

const albumModel = mongoose.model('Album', albumSchema);

module.exports = albumModel;
