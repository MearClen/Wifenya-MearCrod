const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');
const weather = require('weather-js')

module.exports = {
    config: {
        name: 'weather',
        description: 'Shows weather information',
        aliases: ["weather"],
        usage: '<city name>',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        if(args.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("Please enter a location!")
            .setColor(config.embedcolor)
            .setTimestamp()
                .setFooter('© Menyoo ', 'https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270')
          return message.channel.send(errorembed);
        }
        
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
          
        if(result.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("Please enter a vaild location!")
            .setColor(config.embedcolor)
            .setTimestamp()
                .setFooter('© Menyoo ', 'https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270')
          return message.channel.send(errorembed);
        }
        
          var current = result[0].current;
          var location = result[0].location;
            if (err) {
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("Please enter a vaild location!")
            .setColor(config.embedcolor)
            .setTimestamp()
                .setFooter('© Menyoo ', 'https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270')
          return message.channel.send(errorembed);
            }
        
            
            let embed = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(config.embedcolor)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .setTimestamp()
                .setFooter('© Karma ', 'https://cdn.discordapp.com/attachments/725019921159028808/739770316754256012/Screenshot_20200803-1459592.png')
            message.channel.send(embed)
        })
    }
}

