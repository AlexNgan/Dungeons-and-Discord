/*
  test.js
  Author: Alex (aka Morty)
  TEST SCRIPT.
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const bot = new Discord.Client();
const config = require("./config.json");  //Allows config details to be stored secretly
const fs = require("fs");

//To ensure that client  is ready. Small amount of time for discord.js to load its servers, users, etc.
bot.on('ready', () => {
  bot.user.setGame(`TEST SCRIPT with ${bot.users.size} friends!`);
});

console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);

bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if(msg.author.bot){return;}
  //PING PONG.
  if (msg.content === ".ping") {
    msg.reply('Pong!');
  }

  if(msg.content === ".version"){
    msg.reply("DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);
  }

  else{return;}
});

bot.login(config.token);  //Logs in bot by fetching token from config file.