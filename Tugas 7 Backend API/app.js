const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./src/routes/product')
const historyRouter = require('./src/routes/history')
const port = 3003;

const app = express();

app.listen(port, () => {
    console.log(`app is running on localhost port ${port}`)
});

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/product', productRouter)
app.use('/history', historyRouter)
