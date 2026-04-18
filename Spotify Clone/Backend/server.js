
const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const ConnectDB = require("./src/db/db");

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

ConnectDB();