const Film = require('../models/Film');

module.exports = {
    async index (req, res) {
        try{
            const films = await Film.findAll({
                limit: 10
            });
            res.send(films);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured! Trying to fetch the films'
            });
        }
    },
    async post (req, res) {
        try{
            console.log(req.body)
            const film = await Film.create(req.body);
            res.send(film);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured! Trying to create the films'
            });
        }
    },
    async show (req, res) {
        try{
            const film = await Film.findById(req.params.filmId);
            res.send(film);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured! Trying to show the films'
            });
        }
    },
    async put (req, res) {
        try{
            console.log(req.body)
            const film = await Film.update(req.body, {
                where: {
                    id: req.params.filmId
                }
            });
            res.send(req.body);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured! Trying to update the films'
            });
        }
    }
}