const { createConnection } = require('typeorm');
const configs = require('../configs/configs.json');

const connectDB = async () => {
    try {
        const connection = await createConnection({
            type: 'mysql',
            host: configs.database.host,
            port: configs.database.port,
            username: configs.database.username,
            password: configs.database.password,
            database: configs.database.name,
            entities: [
                __dirname + '/Entity/*.js'
            ],
            synchronize: true,
            logging: false,
        });
        console.log('Database connected successfully');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;