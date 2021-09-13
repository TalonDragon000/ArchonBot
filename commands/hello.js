const { SlashCommandBuilder, userManager } = require('@discordjs/builders');
const user = userManager.GetCurrentUser();
console.WriteLine('Connected to user {0}', user.Id);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Say hello!'),
	async execute(interaction) {
		await interaction.reply(`Hi there ${user.username}! How are you?`);
		const message = await interaction.fetchReply();
		console.log(message);
	},
};