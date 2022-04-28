const Discord = require('discord.js');

const mongoose = require('mongoose');

const worker = require('../../models/workerdata');

module.exports = {
    name: 'etsi työntekijät',
    description: 'find lusmut',
    detailedDescription: 'ETSI LUSMUT',
    execute(message = Discord.Message.prototype, args = []) {
        if (message.author.id != 221652595486228481 && message.author.id != 615986019069591612 && message.author.id != 246721024102498304) return message.reply('Sori, et ole Eemil tai Alvar. En voi toteuttaa komentoasi.')
        
        const embed = new Discord.MessageEmbed()
            .setAuthor({name:'Lilith - Lusmutietokanta', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg'})
            .setDescription('Listasin teille tähän kaikki työntekijät.')
            .setColor("#FF8000")
            .setFooter('Lé Keksistinen - Author of Lilith')
            .setThumbnail('https://cdn.discordapp.com/attachments/246928010408624128/969204157250699304/scroll.png')
            

        worker.find({}).then(slaves => {
            console.log(slaves)
            slaves.forEach(slave => {
                const nimi = slave.WorkerName
                const titteli = slave.Title
                const numero = slave.PhNumber
                embed.addField(titteli, `${nimi}\n${numero}`)
            })

            message.channel.send({embeds:[embed]})

        })



    }
}