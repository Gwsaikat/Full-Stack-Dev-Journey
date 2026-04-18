const express = require("express");
const cookieParser = require("cookie-parser");

const authRouter = require("./Routes/auth.routes");
const musicRouter = require("./Routes/music.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/music', musicRouter);

module.exports = app;