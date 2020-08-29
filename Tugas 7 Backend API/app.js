const express = require('express');
const port = 3003;

const app = express();

app.listen(port, () => {
    console.log(`app is running on localhost port ${port}`)
});

app.get('/tes', (req, res) => {
    res.send('Testt test hello')
})

