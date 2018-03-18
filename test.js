/*
  index.js
  Author: Logan (aka Morty)
*/

const Discord = require('discord.js');  //bot runs on the Discord js module
const bot = new Discord.Client();
const config = require("./config.json");  //Allows config details to be stored secretly
const fs = require("fs");

bot.user.setGame("Chilling in Cedar Rapids with  ${bot.users.size} friends!");

console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);

//Get and stores internal ID for the special emote.
const eyes = client.emojis.find("name", "eyes");

bot.on('message', msg => {
  // Exit and stop if the prefix is not there or if user is a bot.
  if(!msg.content.startsWith(config.prefix) || msg.author.bot){return;}
  //PING PONG.
  if (msg.content.startsWith(config.prefix + "ping")) {
    msg.reply("pong! Your ping to my server is " + Math.round(bot.ping) + " milliseconds.");
  }
});

bot.on('message', async message => {
  await message.react(eyes);
  console.log(message.reactions.find(eyes).count);
  message.reply(message.reactions.find(eyes).count + " eyes AH HA HA.");
});

exports.run = (bot, message, args, level) => {
message.channel.fetchMessages({limit: 1, around: args[0]})
    .then(messages=> {
        const msg = messages.first();

        //Locates the HOF channel.
        var HallOfFame = msg.guild.channels.find('name', 'hall-of-fame');

        if (!HallOfFame) return;
        if (message.reactions.me) return;

        msg.react("320770131741376512");
        const HoF = new Discord.RichEmbed();
            HoF.setColor(`${msg.member.displayHexColor}`)
            .setFooter('Hall of Fame 🏆')
            .setTimestamp()

        //If poster had no nickname...use their regular discord name.
        if (msg.member.nickname == null) {
            HoF.addField('User',`${msg.author.username}`, true)
        } else {
            HoF.addField('User',`${msg.member.nickname} (${msg.author.username})`, true);
        };

        HoF.addField('Channel', `${msg.channel.name}`, true)
        if (msg.attachments.size==0) {
            HoF.addField('Message', `${msg}`)
        } else {
            pictures = msg.attachments.array();
            if (msg != "") {
                HoF.addField('Message', `${msg}`)
            }
            HoF.setImage(pictures[0].url)
        }
        HallOfFame.send({embed: HoF});
        //message.channel.send('Message successfully added!')
    });
};

bot.login(config.token);  //Logs in bot by fetching token from config file.
