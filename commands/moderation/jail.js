const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {
    async function notStaff() {
        message.delete();
        message.author.send('You are not a staff member authorized to use this command.')
    }

    let targetmember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(" ")
    const memberrole = message.guild.roles.cache.get('812126651311325225')
    const mutedrole = message.guild.roles.cache.get('815984539456634890')
    const moderatorrole = message.guild.roles.cache.get('812126006344548412')
    const everyone = message.guild.roles.cache.find(r => r.name === "@everyone")
    if(!message.member.permissions.has("KICK_MEMBERS")) await notStaff();
    if(!targetmember) return message.channel.send("You haven't mentioned a user!")
    if(targetmember.roles.cache.has(mutedrole)) return message.reply("The member has been already jailed!")
    if(!reason) return message.delete().then(async() => {
        await message.channel.send("Please enter a reason.")
    })
    targetmember.roles.add(mutedrole)
    message.react("🔒")
    let ticketname = targetmember.user.tag
    let jailchannel = await message.guild.channels.create("jail-"+ticketname, {
        type: "GUILD_TEXT",
        parent: "938636987504685086",
        topic: "Jail ticket for "+ticketname
    })
    await jailchannel.permissionOverwrites.set([
        { id: targetmember.id, allow: ["VIEW_CHANNEL", "SEND_MESSAGES"] },
        { id: memberrole.id, deny: ["VIEW_CHANNEL"] },
        { id: moderatorrole.id, allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"] },
        { id: everyone.id, deny: ["VIEW_CHANNEL"] }
    ])
    console.log(`🚨 Member has been jailed:\nMember: ${targetmember.user.tag}\nReason: ${reason}`)
    const channelembed = new MessageEmbed()
        .setTitle("You have been jailed!")
        .setDescription(`👤 **Suspect:** \`${targetmember.user.tag}\`\n🔒 **Reason:** \`${reason}\`\n\n`)
        .setFooter({ text: targetmember.user.id })
        .setColor('#ff0000')
    jailchannel.send({ content: `${targetmember}`, embeds: [channelembed] }).catch((e) => {})
    targetmember.send({ content: `${targetmember}`, embeds: [channelembed] }).catch((e) => {})
}

module.exports.help = {
    name: "jail",
    aliases:[]
}