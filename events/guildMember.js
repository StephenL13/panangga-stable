const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const client = require(`../index.js`).client

// guildMemberAdd; unverified role is given

client.on('guildMemberAdd', member => {
    console.log('User @' + member.user.tag + ' has joined the server!')
    const embed = new MessageEmbed()
        .setTitle("Welcome to Philippines Is For Christ!")
        .setDescription(`We are a Non-Denominational Filipino Discord community focused on nation building and seeking fellowship with believers of our Lord Jesus Christ.\n\nFounded since February 19th, 2021\n\nTo gain entry, [please read the rules](https://discord.com/channels/811962037923872779/811962037923872782/911953022932901989) carefully.\nAfterwards, go to <#812134545158963221> and follow the given instructions.\n\n"Blessed is the nation whose God is the Lord, the people he chose for his inheritance."\n- Psalm 33:12 NIV`)
        .setImage('https://c.tenor.com/sqQM2EfOfhMAAAAC/pifc.gif')
        .setFooter({ text: '© Philippines Is For Christ' })
        .setTimestamp()
        .setColor('#FFF700')
    member.roles.add('893492507193770035').then(() => {
        member.send({ embeds: [embed] }).catch(e => {console.log(`${member.user.tag} has DMs closed!`)})
    }).catch(e => {});
})

client.on('guildMemberUpdate', (oldMember, newMember) => {
    if (oldMember.roles.cache.size !== newMember.roles.cache.size) {
        if (!oldMember.roles.cache.has("812126651311325225") && newMember.roles.cache.has("812126651311325225")) {
            const welcome = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle(`Mabuhay! You are now verified.`)
                .setDescription(`Please proceed to the <#1002240545730609223> for the roles. We're glad to be with us for fellowship and deep encouragement of God's Word.\n\nDon't forget to say hi on chat and head off to <#816513331648397318> by letting us know yourself!`)
                .setThumbnail(newMember.user.displayAvatarURL({ dynamic: true }));
            newMember.roles.remove("893492507193770035")
            client.channels.cache.get(`812128142855503932`).send({ content: `${newMember}`, embeds: [welcome] });
    }
}})

client.on('guildMemberRemove', member => {
  console.log('User @' + member.user.tag + ' has left the server.')
})