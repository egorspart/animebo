const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', (message) =>{
    if(message.content == "бот")
    {
    message.channel.send("Да?");
            
    }
     if(message.content == "Да")
    {
    message.channel.send("Провода");
            
    }
    });
    
  
    
    client.login(process.env.BOT_TOKEN);
