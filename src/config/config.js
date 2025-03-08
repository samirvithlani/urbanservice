const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 3002,
    DB_URL: process.env.DB_URL || 'mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/urbanservice',
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
}
