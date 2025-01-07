# Telegram Bot Project

This project is a Telegram bot built using Node.js, TypeORM, Telegraf, and MySQL. It serves as a template for creating a bot that can interact with users, manage a database, and handle various commands and callbacks.

## Project Structure

- **configs/**: Contains configuration settings for the bot.
  - `configs.json`: Configuration file for bot token and database connection details.
  
- **database/**: Manages database connections and migrations.
  - **migrations/**: Directory for migration files.
  - `connect.js`: Establishes a connection to the MySQL database using TypeORM.
  - **Entity/**: Contains entity definitions for TypeORM.
    - `users.js`: Defines the User entity with relevant properties.

- **handlers/**: Contains logic for handling commands, buttons, and callbacks.
  - **commands/**: Command handlers for the bot.
    - `start.js`: Handles the /start command and sends a welcome message.
  - **buttons/**: Button interaction handlers.
    - `hello.js`: Responds to "Hello" button interactions.
  - **callbacks/**: Handles callback queries.
    - `download.js`: Processes download requests and sends responses.

- **middlewares/**: Contains middleware functions for the bot.
  - `register_user.js`: Registers new users in the database upon first interaction.

- **utils/**: Utility functions for logging, formatting, etc.

- `app.js`: Main entry point of the application. Initializes the bot, sets up middleware, and handles automatic table generation and migrations.

- `package.json`: Configuration file for npm, listing dependencies and scripts.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd telegram-bot
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the bot token and database connection in `configs/configs.json`.

4. Run the application:
   ```
   node app.js
   ```

This will automatically generate the necessary database tables and start the bot.

## Usage

- Interact with the bot on Telegram by sending the `/start` command.
- Use the buttons provided in the bot interface to trigger specific actions.
- The bot will register new users and handle their requests accordingly.

## License

This project is licensed under the MIT License.