/*
  index.js
  Author: Alex (aka Morty)
  Bot dependencies and setup.
*/

const discord = require('discord.js');  //bot runs on the Discord js module
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.ping') {
    msg.reply('Pong!');
  }
});

client.login('token');
