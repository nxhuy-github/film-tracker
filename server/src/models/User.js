const db = require('./index');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword (user, options) {
    const SALT = 10;
    
    if (!user.changed('password')) {
        return;
    }
    return bcrypt
    .genSaltAsync(SALT)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash);
      console.log(user.password);
    });
}

const User = db.sequelize.define('User', {
    email: {
        type: db.Sequelize.STRING,
        unique: true
    },
    password: db.Sequelize.STRING
},{
    hooks: {
        beforeCreate: hashPassword
    }
});

User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password);
}

module.exports = User;