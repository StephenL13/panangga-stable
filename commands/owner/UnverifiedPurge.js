const { MessageCollector } = require("discord.js")

module.exports.run = async(client, message, args, prefix) => {
    if (message.author.id === '136292974379270144'){
        if (args[0] == "--nodm") {
          const filter = (m) =>
            m.author.id === message.author.id && m.content.includes("YES");
            message.channel.send("**Are you sure you want to kick the unverified members?**\nType `YES` in exact text to confirm. Type `NO` to cancel.");
          const collector = new MessageCollector(message.channel, filter);
          collector.on("collect", (message) => {
            if (message.content === "YES") {
              let members =
                message.guild.roles.cache.get("893492507193770035").members;
                members.forEach((m) => {
                    m.kick().catch(e => {})
                });
              message.react("👋");
              message.channel.send("Purge successful.");
              collector.stop();
            } else if (message.content === "NO") {
              message.channel.send("The final judgement has been lifted.");
            } else {
                message.channnel.send("Purge canceled. Please follow the instructions given on code blocks.")
            }
          });
        } else {
          const filter = (m) =>
            m.author.id === message.author.id && m.content.includes("YES");
          message.channel.send(
            "**Are you sure you want to kick the unverified members?**\nType `YES` in exact text to confirm. Type `NO` to cancel."
          );
          const collector = new MessageCollector(message.channel, filter);

          collector.on("collect", (message) => {
            if (message.content === "YES") {
              let members =
                message.guild.roles.cache.get("893492507193770035").members;
                members.forEach((m) => {
                m.send("Hello, you haven't verified for days now. Feel free to come back soon if you're ready.\n\nhttps://discord.gg/eEsPfnSw").catch((e) => {});
                m.kick().catch(e => {})
              });
              message.react("👋");
              message.channel.send("Purge successful.");
              collector.stop();
            } else if (message.content === "NO") {
              message.channel.send("The final judgement has been lifted.");
            } else {
                message.channel.send("Purge canceled. Please follow the instructions given on code blocks.").catch(e => {})
            }
          });
        }
    } else return message.channel.send('Only the owner can do that.')
}

module.exports.help = {
    name: "unverifiedpurge",
    aliases: []
}