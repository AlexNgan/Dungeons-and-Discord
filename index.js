/*
  index.js
  Author: Logan (aka Morty)
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const bot = new Discord.Client();
const config = require("./config.json");  //Allows config details to be stored secretly
const fs = require("fs");

//Variables for storing character info.
var characters;

//To ensure that client  is ready. Small amount of time for discord.js to load its servers, users, etc.
bot.on('ready', () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  bot.user.setActivity(`with ${bot.user.size} friends`);
});

console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);

//Message reply handled here.
bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if(/*!msg.content.startsWith(config.prefix)*/ || msg.author.bot){return;}

  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g); //Pulls off prefix and leaves just command and args.
  const command = args.shift().toLowerCase(); //So capitalization shouldn't affect commands being read.

  //PING PONG.
  if (msg.content.startsWith(config.prefix + "ping")) {
    msg.reply("pong! Your ping to my server is " + Math.round(bot.ping) + " milliseconds.");
  }

  //Displays versioning.
  if(msg.content.startsWith(config.prefix + "version")){
    msg.reply("DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version + "\nSource Code: https://github.com/Mortyyy/Dungeons-and-Discord");
  }

  //To troll a friend.
  var lennyList = ["( ͡° ͜ʖ ͡°)","(° 3 °)","͡° ͜ʖ ͡–","┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴","ᕕ( ͡° ͜ʖ ͡°)ᕗ","( ͡° ͜ʖ ͡~)"];
  if(msg.content.toUpperCase() === "RADY"){
    //Generates random number between 0 and the last array index.
    var number = Math.floor(Math.random()*(lennyList.length));
    msg.channel.send(lennyList[number]);
  }

  var wakeUpList = ["before you go go", "when it's all over", "(can't wake up)", "inside", "bruh u already awake"];
  if(msg.content.toUpperCase() === "WAKE ME UP"){
    var number = Math.floor(Math.random()*(wakeUpList.length));
    msg.channel.send(wakeUpList[number]);
  }

//Pour one out for Big Shaq.
  if(msg.content==="2+2?"){
    msg.channel.send("is 4, quick maths");
  }

//---------- WELCOME TO DICE CODE ----------//

  if(msg.content.startsWith(config.prefix + "d2")){msg.reply(roll(1,2));}

  if(msg.content.startsWith(config.prefix + "d3")){msg.reply(roll(1,3));}

  if(msg.content.startsWith(config.prefix + "d4")){msg.reply(roll(1,4));}

  if(msg.content.startsWith(config.prefix + "d6")){msg.reply(roll(1,6));}

  if(msg.content.startsWith(config.prefix + "d8")){msg.reply("wow a date, eh? " + roll(1,8));}

  if(msg.content.startsWith(config.prefix + "d10")){msg.reply(roll(1,10));}

  if(msg.content.startsWith(config.prefix + "d12")){msg.reply(roll(1,12));}

  if(msg.content.startsWith(config.prefix + "d20")){msg.reply(roll(1,20));}

  if(msg.content.startsWith(config.prefix + "d100")){msg.reply(roll(1,100));}

  //--------------- END DICE ----------------//

/*
  //Command to register new character.
  if(msg.content === ".newcharacter"){
    makeNewCharacter();
  }
*/

  else{return;}
});

//Called by dice code.
function roll(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  flair = "";
  result = Math.floor(Math.random() * (max - min + 1)) + min;

  if(max == result){
    flair = ". :tada:";
  } else if (result == 1) {
    flair = ". Get rekt, scrub. :poop:";
  }
  return "you've rolled " + result + flair;
}

bot.login(config.token);  //Logs in bot by fetching token from config file.
