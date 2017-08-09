/*
  rady.js
  Author: Alex (aka Morty)
*/

const Discord = require("discord.js");
var lennyList = ["( ͡° ͜ʖ ͡° )", "( ͡° 3 ° )", "͡° ͜ʖ ͡ –", "┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴"];

bot.on('message', msg => {
  if (message.author.bot) return;

  if(message.content.equals("rady") == true){
    //Generates random number between 0 and the last array index.
    var number = Math.floor(Math.random()*(lennyList.length - 1));
    msg.reply();
  }
