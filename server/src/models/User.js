const db = require('./index');

const User = db.sequelize.define('User', {
    email: {
        type: db.Sequelize.STRING,
        unique: true
    },
    password: db.Sequelize.STRING
});

module.exports = User;