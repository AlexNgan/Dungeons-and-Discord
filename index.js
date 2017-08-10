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
  client.user.setGame(`with ${client.users.size} friends!`);
  //console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if (msg.content.startsWith(config.prefix) + 'ping' || message.author.bot) {
    msg.reply('Pong!');
  }
});

bot.login(bot.config.token);  //Logs in bot by fetching token from config file.
