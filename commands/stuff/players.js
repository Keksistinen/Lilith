const Discord = require('discord.js');
const axios = require('axios').default 

module.exports = {
    name: 'lusmut',
    description: 'YEET',
    detailedDescription: 'vitun lusmut',
    execute(message = Discord.Message.prototype, args = []) {

        const lusmut = [
            'Alvar Airisto',
            'Eemil Pikkarainen',
            'Aki Herler',
            'Aimo Kimpale',
            'Popsi Haakana',
            'Jyrki Aistain',
            'Jerry Leinonen',
            'Veli Korppinen',
            'Elisa Saren',
            'Aleksi Myllylahti',
            'Simo Kuassimo',
            'Keijo Hassi',
            'Jani Lehtonen',
            'Keijo Kehveli'

        ]

        axios('https://api.pprp.fi/pelaajat?hash=').then(response => {
            const pelaajat = response.data
            let paikallaolijat = []
            pelaajat.forEach(pelaaja => {
                if(lusmut.includes(`${pelaaja.etunimi} ${pelaaja.sukunimi}`)) {
                    console.log(`Henkilö(t) ${pelaaja.etunimi} ${pelaaja.sukunimi} ovat paikalla!`)
                    paikallaolijat.push(`${pelaaja.etunimi} ${pelaaja.sukunimi}`)
                       
            }
        })
            if(paikallaolijat.length == 0) return message.channel.send('Ketään ei ole paikalla :(')
                message.channel.send(`Paikalla ovat: ${paikallaolijat.join(', ')}. Yhteensä: ${paikallaolijat.length}`)
                
        }).catch(error => {
            message.channel.send('Hm.. En voinut yhdistyä lusmujen jalkapantaan tietojen saamiseksi. :(') 
            error = true
        })
            
    }
}





















