const { MessageCollector } = require("discord.js")

module.exports.run = async(client, message, args, prefix) => {
    if (message.author.id === '136292974379270144'){
        const filter = m => m.author.id === message.author.id && m.content.includes("YES")
        message.channel.send("**Are you sure you want to kick the unverified members?**\nType `YES` in exact text to confirm. Type `NO` to cancel.")
        const collector = new MessageCollector(message.channel, filter);

        collector.on('collect', message => {
            if (message.content === "YES") {
                /* message.guild.members.forEach(member => {
                    if (member.roles.has("912996003035111465")){
                        member.send("An unverified member receives an invite link. This is a test. Don't be alarmed.")
                    }
                    message.channel.send("Purge successful.")

                    will deprecate this in the future
               }) */
               let members = message.guild.roles.cache.get('893492507193770035').members
               members.forEach(m => {
                    m.kick()
               })
               message.react('👋')
               message.channel.send("Purge successful.")
                collector.stop()
            } else if (message.content === "NO") {
                message.channel.send("The final judgement has been lifted.")
            }
        })
    } else return message.channel.send('Only the owner can do that.')
}

module.exports.help = {
    name: "unverifiedpurge",
    aliases: []
}