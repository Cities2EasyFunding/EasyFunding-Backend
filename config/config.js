module.exports = {
    port: process.env.PORT || 3001,
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/EasyFundingDB',
    secret: '582599e1a882e49aa86b8b181a816b86',
    mail: {
        user: 'feelfoodeetac@gmail.com',
        password: 'feelfood18'
    }
};