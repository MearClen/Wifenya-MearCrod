const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'invite',
        description: 'Link to invite me',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**Menyoo Invite** \n\n**👋 Hey!\n Do you want to Invite your friends? [Click Here](https://discord.gg/Um366fHnNf) to Invite friends!\nThanks for supporting my server discord.** ❤️"
    )
    .addField(
      "Support Link: ",
      `**[Click Here!](https://saweria.co/Menyoo)**`,
      true
    )
    .addField(
      "Website Profile:",
      `**[Click Here!](https://bit.ly/MearClenCarrd)**`,
      true
    )
    .setTimestamp()
    .setFooter(
      "© Menyoo",
      "https://cdn.discordapp.com/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg"
    )
    .setColor(config.embedcolor);
    message.channel.send(embed)
    }
}

