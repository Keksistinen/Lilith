const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Pong!',
    detailedDescription: 'Gets message goaround time and the latency of the Discord API.',
    execute(message = Discord.Message.prototype, args = []) {
            
        message.channel.send('Pong!')
        
    },
}

        
