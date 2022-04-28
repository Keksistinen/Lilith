const Discord = require('discord.js');

const mongoose = require('mongoose');

const worker = require('../../models/workerdata');

module.exports = {
    name: 'poista työntekijä',
    description: 'a work',
    detailedDescription: 'TÖITÄ SAATANA',
    execute(message = Discord.Message.prototype, args = []) {
        if (message.author.id != 221652595486228481 && message.author.id != 615986019069591612 && message.author.id != 246721024102498304) return message.reply('Sori, et ole Eemil tai Alvar. En voi toteuttaa komentoasi.')

        const slave = args.join(' ')
        worker.deleteOne({WorkerName: slave}).then(result => {
            console.log(result)

            if(result.deletedCount == 1) message.channel.send('Ok. Orja eliminoitu. :bomb:')
            if(result.deletedCount == 0) message.channel.send('Orjaa ei ole olemassa, joko se on tapettu tai myyty. :scroll:')
        })




    }
}
