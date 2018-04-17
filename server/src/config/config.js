module.exports = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'filmtracker',
        user: process.env.DB_USER || 'filmtracker',
        password: process.env.DB_PASS || 'filmtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './filmtracker.sqlite',
            operatorsAliases: false
        }
    }
}