module.exports.run = async(client, message, args, prefix) => {
    let targetmember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const mutedrole = message.guild.roles.cache.get("815984539456634890");
    const moderatorrole = message.guild.roles.cache.get("812126006344548412");

    if (!moderatorrole) return message.delete().then(async () => {
        await message.author.send("You're not a staff member authorized to use this command.");
        }).catch((e) => {});
    if(message.member.permissions.has("KICK_MEMBERS")) return message.delete().then(async () => {
        await message.author.send("You're not a staff member authorized to use this command.");
        }).catch((e) => {});
    if(!message.channel.parent.id === "938636987504685086") return console.log(`${message.author.tag} executed in a non-jail ticket.`)
    if (!targetmember) return message.channel.send("You haven't mentioned a user!");
    message.react("🔒")
    await message.channel.send("**Member unjailed! The channel will be closed in five seconds.**")
    setTimeout(() => {
        targetmember.roles.remove(mutedrole);
        message.channel.delete()
    }, 5000)
}

module.exports.help = {
    name: "unjail",
    aliases:[]
}