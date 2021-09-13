/* eslint-disable brace-style */
// I need these files below in order to call certain commands/code
// const fs = require('fs');
const { Client, Intents } = require('discord.js');
const { TOKEN } = require('./config.json');

// Client is me, and I am pulling my info from the server
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// I create and add my new SlashCommand in the discord.js/builder file to use in the server; .js command is read.
// client.commands = new Collection();

// This allows users to respond to a slash command directive; default wait time is 3 seconds
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});


// finds and reads the events in the events folder and executes
// const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

client.login(TOKEN);