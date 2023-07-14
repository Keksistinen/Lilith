
const chalk = require('chalk');
const LOGO =

`
,_ _                            
/| | |   _                       
 | | |  / \_/|/|/|  /|/|/|  |  | 
 | | |_/\_/  | | |_/ | | |_/ \/|/
                              (| 
                        
\n`;

console.log(chalk.magenta(LOGO));
console.log('[-=- Mommy -=-]');


const Discord = require('discord.js');
require('dotenv').config()
const { prefix } = require('./config.json');
const fs = require('fs');



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
/home/ubuntu/Mommy-bot/Mommy

global.noniiError = function(errormessage) {
    console.log(chalk.bold.red('[Mommy] ') + chalk.red(errormessage))
}

global.noniiGood = function(hyvismessage) {
    console.log(chalk.bold.green('[Mommy] ') + chalk.green(hyvismessage))
}

const keksi = '<@221652595486228481>' // Keksin käyttäjä ID -> Mention

client.once('ready', () => {
    client.user.setStatus("online")
    client.user.setActivity('Maintenance: ' + maintenancemode, { type: 'STREAMING'})
    console.log(chalk.green('[Mommy] I am aliveee'));
    client.channels.cache.get(process.env.CHANNEL_D_ID1_P).sendTyping()
    client.channels.cache.get(process.env.CHANNEL_D_ID1_P).send('[System] ' + keksi + ' Olen hereillä :3')
    console.log('[System] ' + 'Huoltotila: ' + chalk.green(maintenancemode))

    
    if(maintenancemode == true) return 
    const embedOnline = new Discord.MessageEmbed()
        .setAuthor({ name: 'Mommy - System [Start]', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
        .setDescription('Olen hereillä :3')
        .setColor('#7fcd6a')
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Mommy', iconURL: 'https://cdn.discordapp.com/attachments/246928010408624128/969202704104693790/EZ5JJbi5_400x400.jpg' })
        .setThumbnail('https://cdn.discordapp.com/attachments/246928010408624128/992100309147070484/212e30e47232be03033a87dc58edaa95.png')
        .addField('System Status', 'Alive')
        .addField('MongoDB Status', 'Successfully connected')
        .addField('Huoltotila Status', String(maintenancemode))
        client.channels.cache.get(process.env.CHANNEL_D_ID1_P).send({ embeds: [embedOnline]})

})


client.on('messageCreate', msg => {
    if (msg.author.bot) return
    if (msg.mentions.users.has(client.user.id)) {
        msg.channel.send(`Paikalla! :airplane:`)
    }
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

    for (let i = args.length < 6 ? args.length : 6; i > 0; i--) {
        let tempCmd = args.slice(0, i).join(" ");
        if (client.commands.has(tempCmd)) {
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
            "Ei huvita toteuttaa komentoasi nyt, katsotaanko myöhemmin?",
        ]
        let randomMsg = msgs[Math.floor(Math.random() * msgs.length)]
        msg.channel.send(randomMsg)
        return
    }
    // command = client.commands.get(command) //gets the actual command object


    try {
        command.execute(msg, args)
    } catch (error) {
        console.error(error)
        msg.reply("Lahos saatana")
    }
})

const nakkerino = '<@116931222067740676>' // Uljas ID, Mention

process.on('exit', function () {
    client.destroy()
})

process.on('SIGINT', function () {
    client.destroy()
    process.abort()
})

client.login(process.env.TOKEN)

