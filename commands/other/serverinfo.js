const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'serverinfo',
        description: 'Shows informations about server',
        aliases: ["sinfo",],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        const onlineUsers = {
            online: message.guild.presences.cache.filter(presence => presence.status === "online").size,
            idle: message.guild.presences.cache.filter(presence => presence.status === "idle").size,
            dnd: message.guild.presences.cache.filter(presence => presence.status === "dnd").size,
          };
    
          const embed = new Discord.MessageEmbed()
            .setColor(config.embedcolor)
            .setTitle(`${message.guild.name}`)
            .setThumbnail(message.guild.iconURL)
            .addField(`🟢 **Online Users**`, `≫ \`${onlineUsers.online}\``, true)
            .addField(`👤 **Total Users**`,  `≫ \`${message.guild.memberCount}\``, true)
            .addField(`📜 **Roles**`, `≫ \`${message.guild.roles.cache.size}\``, true)
            .addField(`💬 **Text Channels**`, `≫ \`${message.guild.channels.cache.size}\``, true)
            .addField(`🌍 **Server Region**`, `≫ \`${message.guild.region}\``, true)
            .addField(`😎 **Emotes**`, `≫ \`${message.guild.emojis.cache.size}\``, true)
            .setTimestamp()
            .setFooter(`© Menyoo `, "https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270")
    
          message.channel.send(embed);
    }
}

