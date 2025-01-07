const { getConnection } = require('typeorm');
const User = require('../database/Entity/users');

const registerUser = async (ctx, next) => {
    const userId = ctx.from.id;
    const username = ctx.from.username;

    const userRepository = getConnection().getRepository(User);

    let user = await userRepository.findOne({ where: { id: userId } });

    if (!user) {
        user = userRepository.create({ id: userId, username });
        await userRepository.save(user);
        ctx.reply('Welcome! You have been registered.');
    } else {
        ctx.reply('Welcome back!');
    }

    return next();
};

module.exports = registerUser;