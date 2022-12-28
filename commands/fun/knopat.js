const fs = require('fs'),
Discord = require('discord.js');

module.exports = {
    name: 'heitä noppa',
    description: 'knopat',

    execute(message = Discord.Message.prototype, args = []) {
        function getRandom(max) {
            return Math.random() * (max - 1) + 1
        }

        let number = getRandom(21)
        message.channel.send(`Ei perhana sait ${Math.floor(number)}`)
        console.log(`Annettu arvo: ${Math.floor(number)}`)


    }

}


//Tarvittavat knopat
//D6, D20, D4, D8, D10 ja D12