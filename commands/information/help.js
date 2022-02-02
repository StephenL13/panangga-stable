module.exports.run = async(client, message, args, prefix) => {
    message.delete()
    message.author.send(`Server commands list aren't available at the moment.`).catch(e => {
        message.channel.send("Server commands list aren't available at the moment.")
    })
}

module.exports.help = {
    name: "help",
    aliases: []
}