const Eris = require('eris');
const bot = new Eris(process.env.BOT_TOKEN);

bot.on('ready', () => {
	console.log('Connected');
	bot.editStatus('online', {name: 'Command ?', type :0})
});

bot.on('messageCreate', msg => {
	const usedby = `Command ${msg.content} used by ${msg.member.username}#${msg.member.discriminator} (${msg.member.id})`;

	if (msg.author.bot) return;


	};

	if (msg.content === '?help') {
		bot.createMessage(msg.channel.id, 'If you are needing help join the support server here: https://discord.gg/nBCrBQZ')
		.catch((e) => {console.log(e)});

		console.log(usedby);
	};
	  
    if (msg.content === '?addme') {
		bot.createMessage(msg.channel.id, 'You can add me here: https://discordapp.com/api/oauth2/authorize?client_id=498631058690932736&permissions=0&scope=bot')
		.catch((e) => {console.log(e)});

		console.log(usedby);
  	};
if (msg.content === '?ping') {
		bot.createMessage(msg.channel.id, 'Pong')
		.catch((e) => {console.log(e)});

		console.log(usedby);
	};

});

bot.connect();
