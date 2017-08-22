/*
  index.js
  Author: Alex (aka Morty)
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
    msg.reply("pong! Your ping to my server is " + Math.round(bot.ping) + " milliseconds.");
  }

  //Displays versioning.
  if(msg.content === ".version"){
    msg.reply("DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);
  }

  //To troll a friend.
  var lennyList = ["( ͡° ͜ʖ ͡°)","(° 3 °)","͡° ͜ʖ ͡–","┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴","ᕕ( ͡° ͜ʖ ͡°)ᕗ","( ͡° ͜ʖ ͡~)"];
  if(msg.content === "rady"){
    //Generates random number between 0 and the last array index.
    var number = Math.floor(Math.random()*(lennyList.length));
    msg.channel.send(lennyList[number]);
  }

//---------- WELCOME TO DICE CODE ----------//

  if(msg.content === ".d2"){msg.reply(roll(1,2));}

  if(msg.content === ".d3"){msg.reply(roll(1,3));}

  if(msg.content === ".d4"){msg.reply(roll(1,4));}

  if(msg.content === ".d6"){msg.reply(roll(1,6));}

  if(msg.content === ".d8"){msg.reply("wow a date, eh? " + roll(1,8));}

  if(msg.content === ".d10"){msg.reply(roll(1,10));}

  if(msg.content === ".d12"){msg.reply(roll(1,12));}

  if(msg.content === ".d20"){msg.reply(roll(1,20));}

  if(msg.content === ".d100"){msg.reply(roll(1,100));}

  //--------------- END DICE ----------------//

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
  }

  return "you've rolled " + result + flair;
}

bot.login(config.token);  //Logs in bot by fetching token from config file.
