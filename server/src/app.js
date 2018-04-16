const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send('hello word');
});

app.listen(process.env.PORT || 8082, () => {
    console.log('Server started...');
});