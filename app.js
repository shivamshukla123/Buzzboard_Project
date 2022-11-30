const express = require('express');
const orderRouter = require('./routes/orderRoute')

const app = express();
app.use(express.json());


app.use('/orders', orderRouter)

module.exports = app;