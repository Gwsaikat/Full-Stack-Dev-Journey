const jwt = require('jsonwebtoken');

const authArtist = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (decodedToken.role !== 'artist') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = decodedToken;
        next();

    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (decodedToken.role !== 'user') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = decodedToken;
        next();

    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = { authArtist, authUser };