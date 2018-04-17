const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./models/index');
const config = require('./config/config')
const register = require('./routes/register');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

app.use('/register', register);

db.sequelize
.sync()
.then(() => {
    app.listen(config.port, () => {
        console.log('Server started...');
    });
});



