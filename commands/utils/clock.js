const Discord = require('discord.js')

module.exports = {
    name: 'paljonko kello on',
    description: 'Clock',
    detailedDescription: 'KELLO SAATANA',
    execute(message = Discord.Message.prototype, args = []) {

        var currentdate = new Date();
        var datetime = currentdate.toLocaleString('en-us', { timeZone: 'Europe/Helsinki' }).split(',')[1].trim()

        const Clockembed = new Discord.MessageEmbed()
        .setTitle('Kello näyttäisi olevan ' + datetime + ' paikallista aikaa.')
        .setAuthor({ name: 'Lilith - Ajannäyttäjä', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
        .setColor('a16fab')
        // .setFooter({ text: 'Lé Toveri Keksistinen - Author of Lilith', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })

        message.channel.send({ embeds: [Clockembed] })
    },
}


