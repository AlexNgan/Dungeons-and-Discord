/*
  index.js
  Author: Alex (aka Morty)
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const bot = new Discord.Client();
const config = require("./config.json");  //Allows config details to be stored secretly
const fs = require("fs");

//To ensure that client  is ready. Small amount of time for discord.js to load its servers, users, etc.
bot.on('ready', () => {
  bot.user.setGame(`with ${bot.users.size} friends!`);
});

//Whenever a message event occurs.
bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if (!msg.content.startsWith(config.prefix)||msg.author.bot) { return; }

  //Ping pong.
  if(msg.content.startsWith(config.prefix + "ping")) {
    msg.reply('Pong!');
  }

  //KILL PROCESSES. ONLY BOT OWNER CAN RUN.
  if (msg.content.startsWith(config.prefix) + 'kill' && msg.author.id !== config.ownerID) {
    process.exit();
    msg.reply("Process killed.");
  }

  //Command to troll RADYCAT.
  var lennyList = ["( ͡° ͜ʖ ͡° )", "( ͡° 3 ° )", "͡° ͜ʖ ͡ –", "┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴"];

  if(msg.content.equals("rady") == true){
    //Generates random number between 0 and the last array index.
    var number = Math.floor(Math.random()*(lennyList.length - 1));
    msg.reply(lennyList[number]);
  }

  else{return;}
});

bot.login(config.token);  //Logs in bot by fetching token from config file.
