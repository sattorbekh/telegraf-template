module.exports = async (ctx) => {
    const welcomeMessage = "Welcome to the bot! How can I assist you today?";
    await ctx.reply(welcomeMessage);
};