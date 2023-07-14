const fs = require('fs');

const Discord = require('discord.js')

module.exports = {
    name: 'näytä toosa',
    description: 'voehan vittu',

    execute(message = Discord.Message.prototype, args = []) {

        const data = JSON.parse(fs.readFileSync('/home/ubuntu/Lilith/data/toosat.json').toString())
        const randomNumber = Math.floor(data.length * Math.random())

        console.log(data[randomNumber])
        // message.channel.send(data[randomNumber])

        const EmbedKimpale = new Discord.MessageEmbed()
            .setAuthor({ name: 'Lilith - Pikkarainen', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
            .setDescription(':_3')
            .setColor('#0xcba1cb')
            .setFooter({ text: 'Lé Toveri Keksistinen - Author of Lilith', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
            .setImage(data[randomNumber])
        message.channel.send({ embeds: [EmbedKimpale] })




    }

}