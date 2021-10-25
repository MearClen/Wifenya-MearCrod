const Discord = require('discord.js');
const config = require('../../configs/config.json');
const moment = require("moment");
require('moment-duration-format')


module.exports = {
    config: {
        name: 'uptime',
        description: 'Shows bot uptime',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (bot, message, args) => {
        const prefix = config.prefix
        if (!message.content.startsWith(prefix)) return;

        let uptime = moment.duration(bot.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL()
    const botembed = new Discord.MessageEmbed()
        .setTitle("Menyoo Uptime")
        .setColor(config.embedcolor)
        .setDescription(`⏰**Menyoo has been active for** \`${uptime}\`. \n :signal_strength:**The ping is currently** \`${bot.ws.ping} ms\`. \n\n  ❗  **__Attention!__** **Menyoo is restarting himself after \`10 to 15 hours\` for a good quality and lagless sound!**`)
        .setTimestamp()
        .setFooter('© Menyoo ', 'https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270')
        .setThumbnail(bicon);
 message.react ('727551598640889896')
    message.channel.send(botembed);
    }
}

