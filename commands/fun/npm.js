const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');
const fetch = require('node-fetch')

module.exports = {
    config: {
        name: 'npm',
        description: 'Shows information about npm package',
        aliases: ["npm"],
        usage: '<query>',
        accessableby: "",
    },
    run: async (client, message, args) => {
        
        const package = args[0];
		if(!package) {
			return message.channel.send(
				`${client.emotes.error} Please provide a valid package.`
			);
		}

		let response;
		try {
			response = await fetch('https://api.npms.io/v2/search?q=' + args[0]).then(res => res.json());
		}
		catch (e) {
			return message.channel.send(
				`${client.emotes.error} An error occured, please try again!`
			);
		}

		try{
			const pkg = response.results[0].package;
			const embed = new MessageEmbed()
				.setTitle(pkg.name)
				.setThumbnail('https://images-ext-2.discordapp.net/external/ouvh4fn7V9pphARfI-8nQdcfnYgjHZdXWlEg2sNowyw/https/cdn.auth0.com/blog/npm-package-development/logo.png')
				.setURL(pkg.links.npm)
				.setDescription(pkg.description)
				.addFields(
					{ name: '》 Author :', value: pkg.author ? pkg.author.name : 'None' },
					{ name: '》 Version :', value: pkg.version },
					{ name: '》 Repository :', value: pkg.links.repository ? pkg.links.repository : 'None' },
					{ name: '》 Maintainers :', value: pkg.maintainers ? pkg.maintainers.map(e => e.username).join(', ') : 'None' },
					{ name: '》 Keywords :', value: pkg.keywords ? pkg.keywords.join(', ') : 'None' },
				)
				.setColor(config.embedcolor)
				.setFooter('© Menyoo', 'https://media.discordapp.net/attachments/811554650964492291/824571106727165982/15066336735f8d65864627965855723583dbe870_bt211.jpg?width=270&height=270')
                 .setTimestamp();

			message.channel.send(embed);
		}
		catch (e) {
			return message.channel.send(
				`${client.emotes.error} Please provide a valid package.`,
			);
		}
    }
}

