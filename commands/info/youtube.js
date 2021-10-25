const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'youtube',
        description: 'Link to the Github Repository',
        aliases: ["repository"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {

      const embed = new Discord.MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .setDescription( "**Youtube Channel** \n\n ▶ **Menyoo Bot is promosi channel youtube! [Click Here](https://www.youtube.com/c/MearClen) to check the Youtube!\n"+ client.emotes.flyinghearts + "Subscribe are Welcomed, Thanks for supporting me.** ❤️")
    .addField("Invite Link: ",`**[Click Here!](https://discord.gg/Um366fHnNf)**`, true)
    .addField("Support Link: ",`**[Click Here!](https://saweria.co/Menyoo)**`, true)
    .addField("Website Profile:",`**[Click Here!](https://bit.ly/MearClenCarrd)**`, true)
    .setTimestamp()
    .setFooter("© Menyoo","https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270")
    .setColor(config.embedcolor);
    message.channel.send(embed)
    }
}

