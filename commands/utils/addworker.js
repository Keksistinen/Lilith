const Discord = require('discord.js');

const mongoose = require('mongoose');

const worker = require('../../models/workerdata');

module.exports = {
    name: 'lisää työntekijä',
    description: 'a work',
    detailedDescription: 'TÖITÄ SAATANA',
    execute(message = Discord.Message.prototype, args = []) {
        

        if(message.author.id != 221652595486228481 && message.author.id != 615986019069591612 && message.author.id != 246721024102498304) return message.reply('Sori, et ole Eemil tai Alvar. En voi toteuttaa komentoasi.')


        work()
        async function work() {

            let error = false
            message.channel.send('Kenet haluat lisätä?');
            let filter = m => m.author.id === message.author.id // Odottaa viestiä vaan komennon tekijältä
            const answer1 = await message.channel.awaitMessages({filter, 
                max: 1,
                time: 60000, // 60 sekunttia
                errors: ['time']

            }).catch(err => {
                message.channel.send('Ei minulla koko päivää ole! Et vastannut tarpeeksi nopeasti, joten poistin kyselyn. Luuseri.') 
                error = true
            })

            if(error) return
            const nimi = answer1.first().content
            message.channel.send('Haluat lisätä ' + nimi + ' järjestelmään. Minkä tittelin haluat antaa henkilölle?')

            const answer2 = await message.channel.awaitMessages({filter, 
                max: 1,
                time: 60000, // 60 sekunttia
                errors: ['time']

            }).catch(err => {
                message.channel.send('Ei minulla koko päivää ole! Et vastannut tarpeeksi nopeasti, joten poistin kyselyn. Luuseri.') 
                error = true
            })


            if(error) return
            const titteli = answer2.first().content
            message.channel.send(titteli + ' annettu henkilölle ' + nimi + '. Mikä on hänen numeronsa? Hihi')


            const answer3 = await message.channel.awaitMessages({filter, 
                max: 1,
                time: 60000, // 60 sekunttia
                errors: ['time']

            }).catch(err => {
                message.channel.send('Ei minulla koko päivää ole! Et vastannut tarpeeksi nopeasti, joten poistin kyselyn. Luuseri.') 
                error = true
            })
            
            if(error) return
            const numero = answer3.first().content
            message.channel.send('Orjan puhelinnumero lisätty tietokantaan. Oletko varma, että kaikki tiedot ovat oikein? Vastaa Joo/Ei')

            const answer4 = await message.channel.awaitMessages({filter, 
                max: 1,
                time: 60000, // 60 sekunttia
                errors: ['time']

            }).catch(err => {
                message.channel.send('Ei minulla koko päivää ole! Et vastannut tarpeeksi nopeasti, joten poistin kyselyn. Luuseri.') 
                error = true
            })
            
            const finalanswer = answer4.first().content.toLowerCase()
            if(finalanswer == 'joo') {
                message.channel.send('Tiedot on nyt tallennettu järjestelmään.')

                const orja = new worker({
                    WorkerName: nimi,
                    Title: titteli,
                    PhNumber: numero
                })

                orja.save()
            }
            
            else {
                message.channel.send('oke ei hyvä homma tee uusix')
            }
            

        }




        // const keitto = new worker({
        //     WorkerName: 'Keiddo perkele',
        //     Title: 'Toimitusjohtaja',
        //     PhNumber: '957-1066'
        // });

        // keitto.save()


    },
}