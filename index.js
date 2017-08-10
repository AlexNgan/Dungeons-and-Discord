/*
  index.js
  Author: Alex (aka Morty)
  Bot dependencies and setup.
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const client = new Discord.Client();
const config = require("./config.json");  //Allows config details to be stored secretly

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (msg.content === '.ping' || message.author.bot) {
    msg.reply('Pong!');
  }
});
<<<<<<< HEAD

bot.login(bot.config.token);
=======
bot.login(MzQ0OTQ3ODg2MTAzOTg2MTc4.DG0J5w.5du9caHyha1iSk10FO1uA8dIb64);
//bot.login(bot.config.token);
>>>>>>> 6d0bd0e059409c1e02589882cf847ecb02ddb521
