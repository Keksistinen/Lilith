const fs = require('fs'),
Discord = require('discord.js');

module.exports = {
    name: 'heitä noppa',
    description: 'knopat',

    execute(message = Discord.Message.prototype, args = []) {
        function getRandom(max) {
            return Math.round( Math.random() * (max - 1) + 1 )
        }

        const haluttunoppa = args[0] || 6
        if (isNaN(haluttunoppa)) return message.channel.send("ree ei oo numero")
        let number = getRandom(haluttunoppa)
        message.channel.send(`Ei perhana sait ${number}`)
        console.log(`Annettu arvo: ${number}`)
        console.log('Nopan arvo: d'+ haluttunoppa)


    }

}
