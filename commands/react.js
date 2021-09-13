const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('react')
		.setDescription('Reacted~!')
		.addStringOption(option =>
			option.setName('category')
				.setDescription('select your gifs!')
				.setRequired(true)
				.addChoice('Funny', 'gif_funny')
				.addChoice('Meme', 'gif_meme')
				.addChoice('Movie', 'gif_movie'),
		) };

