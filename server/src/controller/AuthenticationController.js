const User = require('../models/User');

module.exports = {
    async register (req, res){
        try{
            //const user = await User.create(req.body);
            //res.send(JSON.stringify(user));
            User.findById(6).then(e => {
                console.log(JSON.stringify(e));
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    }
}