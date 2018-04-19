const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(req.body);
            res.send({
                user: user.toJSON()
            });
        } catch (err) {
            console.log(err);
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },
    async login (req, res) {
        try{
            const {email, password} = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (!user) {
                res.status(403).send({
                    error: 'The user information was incorrect.'
                })
            }
            user.comparePassword(password)
            .then(result => {
                if (!result){
                    res.status(403).send({
                        error: 'The user information was incorrect.'
                    });
                } else{
                    const userJson = user.toJSON();
                    res.send({
                        user: userJson,
                        token: jwtSignUser(userJson)
                    });
                } 
            });
            
        } catch (err) {
            res.status(500).send({
                error: 'Invalid user information.'
            })
        }
    }
}