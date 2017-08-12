/*
  test.js
  Author: Alex (aka Morty)
  TEST SCRIPT.
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const bot = new Discord.Client();
const config = require("./config.json");  //Allows config details to be stored secretly
const fs = require("fs");

//Variables for storing character info.
var characters;

//To ensure that client  is ready. Small amount of time for discord.js to load its servers, users, etc.
bot.on('ready', () => {
  bot.user.setGame(`TEST SCRIPT with ${bot.users.size} friends!`);
});

console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);

//Message reply handled here.
bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if(msg.author.bot){return;}
  //PING PONG.
  if (msg.content === ".ping") {
    msg.reply("Pong! Your ping to my server is " + ${m.createdTimestamp - message.createdTimestamp} + " milliseconds.");
  }

  if(msg.content === ".kill" && msg.author.id == config.ownerID){
    msg.reply("Night, night!");
    process.exit();
  }

  //Displays versioning.
  if(msg.content === ".version"){
    msg.reply("DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);
  }

  //Command to register new character.
  if(msg.content === ".newcharacter"){
    makeNewCharacter();
  }

  else{return;}
});

/*
  //New character function.
  function makeNewCharacter(){

  }
*/

bot.login(config.token);  //Logs in bot by fetching token from config file.
