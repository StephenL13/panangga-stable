module.exports.run = async(client, message, args, prefix) => {
    const moderatorrole = message.guild.roles.cache.get("812126006344548412");

    if(!moderatorrole) return message.delete().then(async () => {
        await message.author.send("You're not a staff member authorized to use this command.");
        }).catch((e) => {});
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.delete().then(async () => {
        await message.author.send("You're not a staff member authorized to use this command.");
        }).catch((e) => {});
    if(message.channel.parent.id === "938636987504685086") {
        message.react("🔓")
        message.channel.send("**The channel will be closed in five seconds.**")
        setTimeout(() => {
            message.channel.delete()
        }, 5000)
    } else {
        return console.log(`${message.author.tag} executed in a non-jail ticket.`)
    }
}

module.exports.help = {
    name: "closejail",
    aliases:[]
}