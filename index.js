/*
  index.js
  Author: Alex (aka Morty)
  Bot dependencies and setup.
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const client = new Discord.Client();
const config = require("./config.json");  //Allows config details to be stored secretly
const fs = require("fs");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if (msg.content.startsWith(config.prefix) + 'ping' || message.author.bot) {
    msg.reply('Pong!');
  }
});

bot.login(bot.config.token);  //Logs in bot by fetching token from config file.

//Command to change prefix.
if(message.content.startsWith(config.prefix + "prefix")) {
  //Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  //Change the configuration in memory
  config.prefix = newPrefix;

  //Have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
}
