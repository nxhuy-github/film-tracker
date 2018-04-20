const db = require('./index');

const Film = db.sequelize.define('Film', {
    title: db.Sequelize.STRING,
    genre: db.Sequelize.STRING,
    director: db.Sequelize.STRING,
    production_company: db.Sequelize.STRING,
    posterURL: db.Sequelize.STRING,
    youtubeId: db.Sequelize.STRING,
    starring: db.Sequelize.TEXT
});


module.exports = Film;