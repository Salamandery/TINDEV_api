const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const router = require('./router');
const cors = require('cors');
const server = express();

env.config();
mongoose.connect(process.env.String_db, {useNewUrlParser: true});

server.use(cors());
server.use(express.json());
server.use(router);

module.exports = server;