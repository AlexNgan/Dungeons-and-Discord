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
  bot.user.setGame(`TEST SCRIPT with ${server.member.length} friends!`);
});

//Message reply handled here.
bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if(msg.author.bot){return;}
  //PING PONG.
  if (msg.content === ".ping") {
    msg.reply("pong! Your ping to my server is " + Math.round(bot.ping) + " milliseconds.");
  }

//TEST ZONE.
var lennyList = ["( ͡° ͜ʖ ͡° )", "( ͡° 3 ° )", "͡° ͜ʖ ͡ –", "┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴"];
  if(msg.content=== "rady"){
  //Generates random number between 0 and the last array index.
  var number = Math.floor(Math.random()*(lennyList.length - 1));
  msg.send(lennyList[number]);
}
//END TEST ZONE.

  //Command to register new character.
  if(msg.content === ".newcharacter"){
    makeNewCharacter();
  }

  else{return;}
});

//Called by dice code.
function roll(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  flair = "";
  result = Math.floor(Math.random() * (max - min + 1)) + min;

  if(max === result){
    flair = ". :tada:";
  } else if (result == 1) {
    flair = ". Get rekt, scrub. :poop:";
  } else{ return; }

  return "you've rolled " + result + flair;
}

/*
  //New character function.
  function makeNewCharacter(){

  }
*/

bot.login(config.token);  //Logs in bot by fetching token from config file.
