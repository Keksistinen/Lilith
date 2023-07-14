const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'näytä ahsoka',
    description: 'ahsok',
    detailedDescription: 'tekninen tietoisuus, fiksu tyyppi',
    execute(message = Discord.Message.prototype, args = []) {

        const data = JSON.parse(fs.readFileSync('/home/ubuntu/Lilith/data/ahsoka.json').toString())
        const randomNumber = Math.floor(data.length * Math.random())

        console.log(data[randomNumber])

        const EmbedKroko = new Discord.MessageEmbed()
        .setAuthor({ name: 'Lilith - Ahsoka', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
        .setDescription('Hmm? :3')
        .setColor('#0xcba1cb')
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Lilith', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
        .setImage(data[randomNumber])
        message.channel.send({ embeds: [EmbedKroko] })



    },
}