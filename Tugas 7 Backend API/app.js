const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./src/routes/product')
const historyRouter = require('./src/routes/history')
const categoryRouter = require('./src/routes/category')

const cors = require('cors')
const auth = require('./src/helpers/auth')

const { PORT } = require('./src/helpers/env')

const app = express();



app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('src/upload'))
app.use('/api/v1/product', productRouter)
app.use('/api/v1/history', historyRouter)
app.use('/api/v1/category', categoryRouter)


app.listen(PORT, () => {
    console.log(`app is running on localhost port ${PORT}`)
});
