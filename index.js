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

bot.login(bot.config.token);
