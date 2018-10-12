const Eris = require('eris');
const bot = new Eris(process.env.BOT_TOKEN);

bot.on('ready', () => {
    console.log('Connected');
    bot.editStatus('online', {name: 'SetPrefix ?', type :0})
});

bot.on('messageCreate', msg => {
    const usedby = `Command ${msg.content} used by ${msg.member.username}#${msg.member.discriminator} (${msg.member.id})`;

    if (msg.author.bot) return;

    if (msg.content === '?updates') {
        bot.createMessage(msg.channel.id, {embed: {
            description: 'Update Page: https://docs.google.com/document/d/1R9D9B1D2_x3f3RFJRLECZ3RLUorm8_SLH6HkAOunDhI/edit)'
        }})
        .catch((e) => {console.log(e)});

        console.log(usedby);
    };
        
    if (msg.content === '?commands') {
        bot.createMessage(msg.channel.id, {embed: {
            description: 'Here is Cannonskis Commands: https://docs.google.com/document/d/1gx5zt7wdAxfEdgGJoDBoVGPZZl6v_fpRKKO3jUJMpvQ/edit?usp=sharing'
        }})
        .catch((e) => {console.log(e)});

        console.log(usedby);
    };

    if (msg.content === '!help') {
        bot.createMessage(msg.channel.id, {embed: {
            description: 'Join the Support Server: https://discord.gg/gUVZw7y'
        }})
        .catch((e) => {console.log(e)});

        console.log(usedby);
    };
      
    if (msg.content === '!addme') {
        bot.createMessage(msg.channel.id, {embed: {
            description: 'Add me to your other Servers at: https://discordapp.com/api/oauth2/authorize?client_id=498690111022825482&permissions=8&redirect_uri=https%3A%2F%2Fgithub.com%2FCannonski13%2FCannonski&scope=bot'
        .catch((e) => {console.log(e)});

        console.log(usedby);
      };

});

bot.connect();
