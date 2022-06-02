// const Discord = require('discord.js');
// const mongoose = require('mongoose');

// const worker = require('../../models/blacklistdata');

// module.exports = {
//     name: 'epälista',
//     description: 'Blacklist',
//     detailedDescription: 'Blacklist for morons',
//     execute(message = Discord.Message.prototype, args = []) {

//         if (message.author.id != 221652595486228481 && message.author.id != 615986019069591612 && message.author.id != 246721024102498304) return message.reply('Sori, et ole Eemil tai Alvar. En voi toteuttaa komentoasi.')

//         blist()
//         async function blist() {

//             let error = false
//             message.channel.send('Kenet haluat lisätä epälistalle?'); // kysytään kuka lisätään list of moron's
//             let filter = m => m.author.id === message.author.id
//             const answer1 = await message.channel.awaitMessages({
//                 filter,
//                 max: 1,
//                 time: 60000, // 60 sekunttia
//                 errors: ['time']

//             }).catch(err => {
//                 message.channel.send('Ei minulla koko päivää ole! Et vastannut tarpeeksi nopeasti, joten poistin kyselyn. Luuseri.')
//                 error = true
//             })

//             if (error) return
//             const nimi = answer1.first().content
//             message.channel.send(nimi + ' on ansainnut pääsyn mustalle listalle. Anna syy:') // Kerrotaan kuka, ja kehotetaan antamaan syy.

//             const answer2 = await message.channel.awaitMessages({
//                 filter,
//                 max: 1,
//                 time: 60000, // 60 sekunttia
//                 errors: ['time']

//             }).catch(err => {
//                 message.channel.send('Ei minulla koko päivää ole! Et vastannut tarpeeksi nopeasti, joten poistin kyselyn. Luuseri.')
//                 error = true
//             })

//             if (error) return
//             const reason = answer3.first().content
//             message.channel.send('Edellämainitulla syyllä ' + nimi +' on ansainnut istumapaikan epälentokoneeseen rikoksistaan AirHerlerin firmaa - ja henkilökuntaa kohtaan.' )
//             message.channel.send(reason)

//             const answer3 = await message.channel.awaitMessages({
//                 filter,
//                 max: 1,
//                 time: 60000, // 60 sekunttia
//                 errors: ['time']

//             }).catch(err => {
//                 message.channel.send('Ei minulla koko päivää ole! Et vastannut tarpeeksi nopeasti, joten poistin kyselyn. Luuseri.')
//                 error = true
//             })



            

            
//         }
//     }
// }
