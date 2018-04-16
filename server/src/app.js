const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const parser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `${req.body.email} was registed`
    });
});

app.listen(process.env.PORT || 8082, () => {
    console.log('Server started...');
});