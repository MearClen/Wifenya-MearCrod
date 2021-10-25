const mapping = {
    " ": "  ",
    "0": ":zero:",
    "1": ":one:",
    "2": ":two:",
    "3": ":three:",
    "4": ":four:",
    "5": ":five:",
    "6": ":six:",
    "7": ":seven:",
    "8": ":eight:",
    "9": ":nine:",
    "!": "!",
    "?": "?",
    "#": "#",
    "*": "*"
  };
  const Discord = require('discord.js');
  const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'botinfo',
        description: 'Information about bot',
        aliases: ["info"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
            mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
          });
            let guilds;
            let channels;
            let users;
          setTimeout(()=>{
            guilds = 
                `${client.guilds.cache.size}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
            channels = 
                `${client.channels.cache.size}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
            let sayy = 0;
            client.guilds.cache.forEach(x =>{
               
               sayy+= x.memberCount
               
             })
             users = 
                
                
                 
                 `${sayy}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
          
             },200)
            //let kullanicisayi = donustur()
          setTimeout(()=>{
            const embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/811554650964492291/824572815830941706/bt21-koya-gif-8.gif")
          .setThumbnail(client.user.avatarURL())
          .setDescription("**Server Info Discord Menyoo.**"+"\n\n <:blue_heart:824578393545900032> **Number of servers serviced :** " + guilds +
          "\n <:blue_heart:824578393545900032> **Number of channels served : ** " + channels +
          "\n <:blue_heart:824578393545900032> **Number of users served : ** " + users +
          "\n\n<:crown:824580540254257194> **Owner Server:** \n <@803175369175465984>")
          .addField("Invite Link: ",`**[Click Here!](https://discord.gg/Um366fHnNf)**`, true)
          .addField("Support Link: ",`**[Click Here!](https://saweria.co/Menyoo)**`, true)
          .addField("Website Profile:",`**[Click Here!](https://bit.ly/MearClenCarrd)**`, true)
          .setTimestamp()
          .setFooter('© Menyoo', 'https://cdn.discordapp.com/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg')
          .setColor(config.embedcolor);
           message.react ('755471130315194399')
          message.channel.send(embed)
                     },500)
    }
}

