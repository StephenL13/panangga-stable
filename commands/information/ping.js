module.exports.run = async(client, message, args, prefix) => {
    message.channel.send(`**Pong! you got ${client.ws.ping} ms.**`)
}

module.exports.help = {
    name: "ping",
    aliases: []
}