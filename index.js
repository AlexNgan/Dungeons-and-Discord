/*
  index.js
  Author: Alex (aka Morty)
  Bot dependencies and setup.
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const bot = new Discord.Client();
const config = require("./config.json");  //Allows config details to be stored secretly
const fs = require("fs");

//To ensure that client  is ready. Small amount of time for discord.js to load its servers, users, etc.
bot.on('ready', () => {
  bot.user.setGame(`with ${bot.users.size} friends!`);
});

bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if (msg.content.startsWith(config.prefix) + 'ping' && !msg.author.bot) {
    msg.reply('Pong!');
  }
});

bot.login(config.token);  //Logs in bot by fetching token from config file.
