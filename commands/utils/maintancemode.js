const Discord = require('discord.js')

module.exports = {
    name: 'aktivoi huoltotila',
    description: 'Maintance mode activation',
    detailedDescription: 'yes',
    execute(message = Discord.Message.prototype, args = []) {
        message.reply('Aktivoin huoltotilan. Vastaan ainoastaan sinun komentoihisi. ✅')
        

    },
}