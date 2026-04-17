const app = require('./src/app')
const ConnectDB = require('./src/database/db')

async function startServer() {
    try {
        await ConnectDB()

        app.listen(3000, () => {
            console.log('Server is Running on Port 3000')
        })
    } catch (error) {
        console.error("Failed to connect DB:", error)
    }
}

startServer()