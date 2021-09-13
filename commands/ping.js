const { SlashCommandBuilder } = require('@discordjs/builders');

// Using this to create a slash command. Module is exporting to server this specific command.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};

// okay to use this as a command template going forward. Separate .js files for each command.