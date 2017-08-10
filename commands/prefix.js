/*
  prefix.js
  Author: Alex (aka Morty)
  Bot dependencies and setup.
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const fs = require("fs");

bot.on('message', msg => {
if(!msg.member.roles.exists('name', 'NameOfRole')) return;

//Command to change prefix.
if(message.content.startsWith(config.prefix + "prefix")) {
  //Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  //Change the configuration in memory
  config.prefix = newPrefix;

  //Have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
}

});
