const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file) {
    try {
        const result = await imagekit.upload({
            file,
            fileName: 'music__' + Date.now(),
            folder: 'music'
        });

        return result;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { uploadFile };

