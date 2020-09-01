const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./src/routes/product')
const historyRouter = require('./src/routes/history')
const { PORT } = require('./src/helpers/env')

const app = express();

app.listen(PORT, () => {
    console.log(`app is running on localhost port ${PORT}`)
});

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/product', productRouter)
app.use('/history', historyRouter)
