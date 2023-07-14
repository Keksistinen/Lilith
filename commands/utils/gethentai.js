const fs = require('fs')
const axios = require("axios").default
const Discord = require('discord.js')

module.exports = {
    name: 'gethentai',
    description: 'voi vittu',
    detailedDescription: 'NO, OH GOD NO!',
    execute(message = Discord.Message.prototype, args = []) {
        if (message.author.id != '221652595486228481') return message.channel.send(`Sorry ${message.author.username}, I can't do that`)
        const subreddit = 'hentai' // Haluttu subreddit

        getPics()
        async function getPics() {
            const amount = 500 // Kuinka monta se kaivaa
            let images = []

            const loopCount = Math.ceil(amount / 100)
            var after = null
            for (var i = 0; i < loopCount; i++) {
                console.log(`Looping for ${i} time.`)
                const posts = await axios.get(`https://reddit.com/r/${subreddit}.json?sort=top&t=week&limit=100&after=${after}`)
                for (const post of posts.data.data.children) {
                    if (!post.data.is_gallery) images.push(post.data.url)
                }
                after = posts.data.data.children[99].data.name
            }

            console.log(`Löyty ${images.length} kuvaa.`)
            
            fs.writeFileSync("/home/ubuntu/Lilith/data/fancy.json", JSON.stringify(images, null, 2))
        }

    },
}
