const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'anna hentui',
    description: 'hentoi',
    detailedDescription: 'tekninen tietoisuus, fiksu tyyppi',
    execute(message = Discord.Message.prototype, args = []) {

        const data = JSON.parse(fs.readFileSync('/home/ubuntu/Lilith/data/fancy.json').toString())
        const randomNumber = Math.floor(data.length * Math.random())

        console.log(data[randomNumber])

        const EmbedKossi = new Discord.MessageEmbed()
        .setAuthor({ name: 'Lilith - Hentui', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
        .setDescription('Hihi :3')
        .setColor('#0xcba1cb')
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Lilith', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
        .setImage(data[randomNumber])
        message.channel.send({ embeds: [EmbedKossi] })



    },
}