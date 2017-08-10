/*
  kill.js
  Author: Alex (aka Morty)
  Kills processes.
*/

const Discord = require('discord.js');

bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if ((msg.content.startsWith(config.prefix) + 'kill' || !msg.author.bot)&&msg.author.id !== config.ownerID) {
    process.abort();
    msg.reply("Process killed.");
  }
});
