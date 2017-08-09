/*
  index.js
  Author: Alex (aka Morty)
  Bot dependencies and setup.
*/

const discord = require('discord.js');  //bot runs on the Discord js module
const client = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '.ping') {
    msg.reply('Pong!');
  }
});

bot.login('token');
