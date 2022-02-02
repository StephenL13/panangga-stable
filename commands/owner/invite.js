module.exports.run = async(client, message, args, prefix) => {
    if(message.author.id == "136292974379270144"){
        await message.guild.invites.create('811962037923872782')
        .then(async invite => {
            await message.react('✅')
            await message.author.send(`Invite code generated: **${invite.code}**`)
        })
        .catch(async e => {
            return message.reply("❌ **There was an error executing this command!**")
        })
    } else message.delete().then(() => {message.author.send("You're not authorized to use this command!")})
}

module.exports.help = {
    name: "invitegenerate",
    aliases: []
}