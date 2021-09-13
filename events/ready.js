module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};

// Ready event confirmation deploying in the console on startup. Just a "ping" not a command.