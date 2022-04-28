const Discord = require('discord.js')

module.exports = {
    name: 'paljonko kello on',
    description: 'Clock',
    detailedDescription: 'KELLO SAATANA',
    execute(message = Discord.Message.prototype, args = []) {

        var currentdate = new Date();
        var datetime = currentdate.toLocaleString('en-us', { timeZone: 'Europe/Helsinki' }).split(',')[1].trim()

        message.channel.send(':alarm_clock: näyttäisi olevan ' + datetime);
    },
}


