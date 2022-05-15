const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {
    let moderator = message.member.roles.cache.has('812126006344548412')
    let admin = message.member.roles.cache.has('816344333212713001')

    if(message.member.permissions.has("KICK_MEMBERS")) {
      const lockEmbed = new MessageEmbed()
        .setColor("#FF0000")
        .setTitle("🔒 Channel is locked.")
        .setDescription(
          "**You are not muted.**\nIt is currently on lockdown, please wait until the staff unlocks this channel."
        )
        .setFooter({ text: "© Philippines Is For Christ" });
      message.channel.permissionOverwrites.edit(message.guild.id, {
        SEND_MESSAGES: false,
      });
      message.channel.permissionOverwrites.edit(
        message.guild.roles.cache.get("812126006344548412"),
        {
          SEND_MESSAGES: true,
        }
      );
      message.channel.send({ embeds: [lockEmbed] });
    } else return message.delete().then(() => message.author.send('You are not a staff member authorized to use this command.'))
  }
  
  module.exports.help = {
    name: "lock",
    aliases: []
  }