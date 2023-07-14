const Discord = require('discord.js')
const sectoralarm = require('sectoralarm');

const email = process.env.EMAIL,
    password = process.env.PASSWORD,
    siteId = process.env.siteID

var settings = sectoralarm.createSettings();

settings.jsonOutput = false;
settings.numberOfRetries = 4;
settings.retryDelayInMs = 4500;

module.exports = {
    name: 'lämpötila',
    description: 'House temperature',
    detailedDescription: 'House temperature which using Sector Alarm-API for conneting',
    execute(message = Discord.Message.prototype, args = []) {

        message.channel.send('Haetaan tietoja...').then(botMessage => {

            sectoralarm.connect(email, password, siteId, settings)
                .then(async (site) => {
                    const temps = await site.temperatures()
                    console.log(temps)
                    console.log('[System] Yläkerta: ' + temps[1].temperature + ' °c')
                    console.log('[System] Alakerta: ' + temps[0].temperature + ' °c')

                    const embedTemp = new Discord.MessageEmbed()
                        .setAuthor({ name: 'Lilith - Lämpötilahomma', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
                        .setDescription('Talon sisälämpötila')
                        .setColor('#0x6a97cd')
                        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Lilith', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
                        .setThumbnail('https://cdn.discordapp.com/attachments/246928010408624128/992056024443928586/6305ff54712d29696712e48643b401ba.png')
                        .addField('Yläkerta', temps[1].temperature + ' °c')
                        .addField('Alakerta', temps[0].temperature + ' °c')
                        message.channel.send({ embeds: [embedTemp] })
                        botMessage.edit('Noin! :3')
                })


            })
            .catch(error => {
                console.log(error.message);
                console.log(error.code);
                message.channel.send(error.message)
                message.channel.send(error.code)
            });

        sectoralarm.connect(email, password, siteId)
            .then(site => {
                return site.status();
            })
            .then(console.log)
            .catch(error => {
                console.log(error.message);
                console.log(error.code);
                message.channel.send(error.message)
                message.channel.send(error.code)
            })



    },
}
