const express = require('express');

const multer = require('multer');
const authMiddleware = require('../middlewares/auth.middleware');
const musicController = require('../controllers/music.controller');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', authMiddleware.authArtist, musicController.uploadMusic);
router.get('/get-all-music', authMiddleware.authUser, musicController.getAllMusic);
router.post('/create-album', authMiddleware.authArtist, musicController.createAlbum);
router.get('/get-all-album', authMiddleware.authUser, musicController.getAllAlbum);

module.exports = router;

