// Everything has been written by Pizzakeitto,
// using https://discordjs.guide/ as example :) yes

const Discord = require('discord.js')
require('dotenv').config()
const { prefix } = require('./config.json')
const fs = require('fs')

const maintenancemode = false

const client = new Discord.Client({
    intents: ['GUILDS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_WEBHOOKS',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING']
})

//Read commands from the commands directory
client.commands = new Discord.Collection()
const commandFolders = fs.readdirSync('./commands')

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`)
        client.commands.set(command.name, command)
    }
}

console.log(client.commands)

client.once('ready', () => {
    client.user.setStatus("online")
    console.log('[Lilith] I am aliveee')
})

client.on('messageCreate', msg => {
    if (maintenancemode && msg.author.id != 221652595486228481) return
    if (msg.author.bot) return // If the message is sent by a bot, do nothing
    if (msg.mentions.users.has(client.user.id)) {
    }

    if (!msg.content.toLowerCase().startsWith(prefix)) return //If the message doesn't start with the prefix, do nothing

    if (!msg.guild) return msg.channel.send("Ei pyge")

    
    let args = msg.content.slice(prefix.length).trim().split(/ +/);
    let command = null;
    
    for(let i = args.length < 6 ? args.length : 6; i > 0; i--) {
        let tempCmd = args.slice(0 , i).join(" ");
        if(client.commands.has(tempCmd)) {
            command = client.commands.get(tempCmd)
            args = args.splice(i)
            break;
        }
    }

    
    if (!command) {
        const msgs = [
            "Minulla ei ole mitään hajua mitä haluat minun tekevän :bone:",
            "Eei kyl nyt onnnaa",
            "Ei pysty",
            "EPEK = Ei pysty ei kykene",
            "En voi toteuttaa pyyntöäsi",
            "Ei huvita nyt, katsotaanko myöehmmin?",
        ]
        let randomMsg = msgs[Math.floor(Math.random() * msgs.length)]
        msg.channel.send(randomMsg)
        return
    }


    try {
        command.execute(msg, args)
    } catch (error) {
        console.error(error)
        msg.reply("Lahos saatana")
    }
})

process.on('exit', function () {
    client.destroy()
})

process.on('SIGINT', function () {
    client.destroy()
    process.abort()
})

client.login(process.env.TOKEN) 
