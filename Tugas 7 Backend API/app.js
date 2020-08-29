const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./src/routes/product')
const port = 3003;

const app = express();

app.listen(port, () => {
    console.log(`app is running on localhost port ${port}`)
});

app.use('/product', productRouter)
