const Discord = require('discord.js');

const mongoose = require('mongoose');

const worker = require('../../models/workerdata');

module.exports = {
    name: 'etsi työntekijät',
    description: 'find lusmut',
    detailedDescription: 'ETSI LUSMUT',
    execute(message = Discord.Message.prototype, args = []) {
        
        const embed = new Discord.MessageEmbed()
            .setAuthor({name:'Lilith - Lusmutietokanta', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg'})
            .setColor("#e57eb8")
            .setFooter({text: 'Lé Toveri Keksistinen - Author of Lilith', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg'})
            .setThumbnail('https://cdn.discordapp.com/attachments/246928010408624128/969204157250699304/scroll.png')
            

        worker.find({}).then(slaves => {
            console.log(slaves)
            slaves.forEach(slave => {
                const nimi = slave.WorkerName
                const titteli = slave.Title
                const numero = slave.PhNumber
                embed.addField(titteli, `${nimi}\n${numero}`)
                
            })

            embed.setDescription('AirHerlerin palkkalistoilla on ' + slaves.length + ' työnvieroksujaa.') 
            message.channel.send({embeds:[embed]}) 

        })



    }
}