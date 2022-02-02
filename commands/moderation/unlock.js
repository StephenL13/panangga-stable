const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args, prefix) => {
  let moderator = message.member.roles.cache.has("812126006344548412");
  let admin = message.member.roles.cache.has("816344333212713001");

  if(message.member.permissions.has("MANAGE_ROLES")){
    if (moderator || admin) {
      const lockEmbed = new MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Channel is unlocked.")
        .setDescription("🔒 Please abide with the rules to avoid disruptions.")
        .setFooter({ text: "© Philippines Is For Christ" });
        message.channel.permissionOverwrites.edit(message.guild.id, {
          SEND_MESSAGES: true,
        });
        message.channel.permissionOverwrites.edit(
          message.guild.roles.cache.get("812126006344548412"),
          {
            SEND_MESSAGES: null,
          }
        );
      message.channel.send({ embeds: [lockEmbed] });
    } else {
      message.delete();
      message.author.send("You are not a staff member authorized to use this command.");
    }
  }
};

module.exports.help = {
  name: "unlock",
  aliases: []
}
