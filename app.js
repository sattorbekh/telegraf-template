const { Telegraf } = require('telegraf');
const { createConnection } = require('typeorm');
const registerUser = require('./middlewares/register_user');
const startCommand = require('./handlers/commands/start');
const helloButton = require('./handlers/buttons/hello');
const downloadCallback = require('./handlers/callbacks/download');
const configs = require('./configs/configs.json');

const bot = new Telegraf(configs.botToken);

async function startApp() {
    try {
        // Establish database connection
        const connection = await createConnection({
            type: 'mysql',
            host: configs.database.host,
            port: configs.database.port,
            username: configs.database.username,
            password: configs.database.password,
            database: configs.database.name,
            entities: [__dirname + '/database/Entity/*.js'],
            synchronize: true, // Automatically create database schema
        });

        // Register middlewares
        bot.use(registerUser);

        // Register commands and callbacks
        bot.start(startCommand);
        bot.action('hello', helloButton);
        bot.action('download', downloadCallback);

        // Start the bot
        bot.launch();
        console.log('Bot is running...');
    } catch (error) {
        console.error('Error starting the bot:', error);
    }
}

startApp();