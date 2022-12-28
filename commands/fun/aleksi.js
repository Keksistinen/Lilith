const Discord = require('discord.js')

module.exports = {
    name: 'aleksi',
    description: 'Aleksi',
    detailedDescription: 'Yoo',
    execute(message = Discord.Message.prototype, args = []) {

            const aleksi = '<@303532915965427712>' // Aleksin ID, Mention
            
            message.channel.send( aleksi + ' on nähty Vesivehmaan lentokentällä kokeilemassa PV:n huippuja: ')
            message.channel.send('https://cdn.discordapp.com/attachments/799252003045638215/988439828796432424/image0.jpg')
    },
}