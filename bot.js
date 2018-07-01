const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', (message) =>{
    if(message.content == "бот")
    {
    message.channel.send("я тут");
            
    }
    });
    
  client.on('ready', () => {
        console.log('I am ready!');
        client.user.setGame('Anime.ru');
    });
    
    client.login(process.env.BOT_TOKEN);
