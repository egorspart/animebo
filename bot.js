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
     if(message.content == "Нет")
    {
    message.channel.send("Пидора ответ");
            
    }
     if(message.content == "Шлюхи аргумент")
    {
    message.channel.send("Хуй те на обед");
            
    }
     if(message.content == "Пошёл нахуй")
    {
    message.channel.send("Нахуй не идут нахуй садятся");
            
    }
    });
    
  
    
    client.login(process.env.BOT_TOKEN);
