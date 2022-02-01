module.exports.run = async (client, message, args, prefix) => {
    function isMod() {
      return message.member.roles.cache.has('812126006344548412')
    }

    function isAdmin() {
      return message.member.roles.cache.has('816344333212713001')
    }

    function runVerify() {
      if(message.channel.parent.id == '873938897753735179') {
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
      } else {
        message.delete();
        message.author.send('The verify command ONLY works on verification channels.')
      }
    }

    if(message.member.permissions.has("MANAGE_ROLES")) {
      if(isMod()) {
        runVerify()
      } else if (isAdmin()) {
        runVerify()
      } else {
        message.delete()
        message.author.send('You are not a staff member authorized to use this command.')
      }
    }
  }
  
  module.exports.help = {
    name: "verify",
    aliases: ["admit"]
  }