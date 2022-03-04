module.exports.run = async (client, message, args, prefix) => {
    if(message.member.permissions.has("MANAGE_ROLES")) {
        let targetmember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const mutedrole = message.guild.roles.cache.get("815984539456634890");
        const moderatorrole = message.guild.roles.cache.get("812126006344548412");

        if (!moderatorrole)
        return message.delete().then(async () => {
            await message.author.send("You're not a staff member authorized to use this command.");
            }).catch((e) => {});
        if (!targetmember) return message.channel.send("You haven't mentioned a user!");
        if (message.channel.parent.id === "938636987504685086"){
            await message.channel.send("**Member unjailed! The channel will be closed in five seconds.**")
            setTimeout(() => {
                targetmember.roles.remove(mutedrole);
                message.channel.delete()
            }, 5000)
        } else return console.log(`${message.author.tag} executed in a non-jail ticket.`)
    } else {
        message.delete();
        message.author.send('You are not a staff member authorized to use this command.')
    }
}

module.exports.help = {
    name: "unjail",
    aliases:[]
}