/*
  rady.js
  Author: Alex (aka Morty)
*/

const Discord = require("discord.js");
const bot = new Discord.Client();
var lennyList = ["( ͡° ͜ʖ ͡° )", "( ͡° 3 ° )", "͡° ͜ʖ ͡ –", "┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴"];

bot.on('message', msg => {
  if (msg.author.bot) return;

  if(msg.content.equals(".rady") == true && !msg.author.bot){
    //Generates random number between 0 and the last array index.
    var number = Math.floor(Math.random()*(lennyList.length - 1));
    msg.reply(lennyList[number]);
  }
});
