const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { Database } = require("quickmongo")
const db = new Database(config.database)


module.exports = {
    config: {
        name: 'chatbot',
        description: 'Shows ChatBot\'s config',
        aliases: ["chatbot"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
      const embedd = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `🤖 ChatBot Configuration 

        **${client.emotes.info} Usage :**
         Type \`${config.prefix}setchatbotchannel\` - To Set a Channel 
         Type \`${config.prefix}disablechatbotchannel\` - To Disable a Channel.
         ChatBot Channel Set - None

        **${client.emotes.info} Examples :**
         \`${config.prefix}setchatbotchannel\` <#${message.channel.id}>
         \`${config.prefix}disablechatbotchannel\` <#${message.channel.id}>`
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
        "https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270"
      )
      .setColor(config.embedcolor);
    
     let channel1 = await db.fetch(`chatbot_${message.guild.id}`);
    if(!channel1) return message.channel.send(embedd)
    var sChannel = message.guild.channels.cache.get(channel1);
    let embedvch = "<#" + sChannel.id + ">"
    
    const embed = new Discord.MessageEmbed()
    
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `**🤖 ChatBot Configuration** 

        **${client.emotes.info} Usage :**
         Type \`${config.prefix}setchatbotchannel\` - To Set a Channel 
         Type \`${config.prefix}disablechatbotchannel\` - To Disable a Channel.
         ChatBot Channel Set - ${embedvch} 

        **${client.emotes.info} Examples :**
         \`${config.prefix}setchatbotchannel\` <#${message.channel.id}>
         \`${config.prefix}disablechatbotchannel\` <#${message.channel.id}>`
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
        "https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270"
      )
      .setColor(config.embedcolor);
    message.channel.send(embed);
  }
}
