const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args, prefix) => {
  message.delete()
    const embed =  new MessageEmbed()
      .setTitle('Message from the developer')
      .setDescription("Hello, folks. I will be revamping the support bot as soon as possible. Our server will have its own select menu for roles which is still under development. I am with you in my prayers and expect the enhancement of accessibility in the next few months for our kababayans who are in need of the Gospel. Maraming salamat!\n\nYour truly,\nStephen L.")
      .setColor('RED')
    message.author.send({ content:`<@${message.author.id}>`, embeds: [embed] })
}

module.exports.help = {
    name: "help",
    aliases: ["tulong"]
}