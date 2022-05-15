module.exports.run = async (client, message, args, prefix) => {
  async function runVerify() {
    if(!args[0]) return message.channel.send("Command is:\n```\n!!verify @user\n!!verify userid\n```")

    try {
      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if (!member) {
        message.react('❌');
        message.reply('⚠ **ERROR:** Member is not found!')
      } else {
        const verifyRole = '812126651311325225'

        if (!member.roles.cache.has('812126651311325225')) {
          message.react('✅').then(() => member.roles.add(verifyRole).then(() => message.reply(`<@${member.user.id}> is now verified! Moderators, you may now close the ticket.`)))
        } else {
          message.react('❌');
          message.reply('⚠ **ERROR:** Member has been already verified!')
        }
      }
    } catch (e) {}
  }

  if(!message.member.permissions.has("KICK_MEMBERS")) return message.delete().then(() => message.author.send('You are not a staff member authorized to use this command.'))
  if(!message.channel.parent.id == '873938897753735179') return message.delete().then(() => message.author.send('The verify command ONLY works on verification channels.').catch(err => {}))
  await runVerify();
}

module.exports.help = {
  name: "verify",
  aliases: ["admit"]
}