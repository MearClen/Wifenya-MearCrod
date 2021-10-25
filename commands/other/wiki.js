const Discord = require('discord.js');
const config = require('../../configs/config.json');
const fetch = require('node-fetch')

module.exports = {
    config: {
        name: 'wiki',
        description: 'Shows information about query from wikipedia',
        aliases: ["wikipedia"],
        usage: '<query>',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        const body = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join(" "))}`,
          ).then(res => res.json().catch(() => {}));
        
        if (!body) return message.channel.sendmessage.channel.send({embed: {
                      color: config.embedcolor,
                      title: "❌ Error Page Not Found."
                  }})
          if (body.title && body.title === "Not found.") return message.channel.send({embed: {
                      color: config.embedcolor,
                      title: "❌ Error Page Not Found."
                  }});
      
        const embed = new Discord.MessageEmbed()
            .setTitle(`🌐 ${body.title} `)
        .addField("More Info: ",`**[Click Here!](${body.content_urls.desktop.page})**`, true)
            .setDescription(`** ${body.extract}**`)
            .setColor(config.embedcolor)
        .setTimestamp()
          .setFooter(`© Menyoo `, "https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270")
        
         if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);
        message.channel.send(embed);

    }
}

