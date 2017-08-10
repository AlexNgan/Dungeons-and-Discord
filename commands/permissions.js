/*
  Author: Aryn
    Original Code: https://github.com/arynapril/gaybot/blob/master/modules/functions.js
  Edited by: Alex (aka Morty)
  Configures permissions levels for server.
*/

//if(!msg.member.roles.exists('name', 'NameOfRole')) return;

module.exports = (bot) => {
    bot.permLevel = message => {
        let permlvl = 0;
        if (message.author.id === bot.config.owner) return 10;
        if (!message.guild || !message.member) return 0;
        try {
          //Basic bitches. Lowest human permissions lvl.
            let memberRole = message.guild.roles.find('name', bot.config.memberRoleName);
            if (memberRole && message.member.roles.has(memberRole.id)) permlvl = 1;
        } catch (e) {
            console.warn("memberRoleName not found. Skipping member (level 1) check");
        }
        try {
          //Finds Nerdy birds and gives them a slightly higher permissions lvl..
            let nerdRole = message.guild.roles.find('name', bot.config.nerdRoleName);
            if (nerdRole && message.member.roles.has(nerdRole.id)) permlvl = 2;
        } catch (e) {
            console.warn("nerdRoleName not found. Skipping Nerd (level 2) check");
        }
        try {
          //Boss birbs.
<<<<<<< HEAD
            let bossRole = message.guild.roles.find('name', bot.config.bossRoleName);
            if (bossRole && message.member.roles.has(bossRole.id)) permlvl = 3;
=======
            let repRole = message.guild.roles.find('name', bot.config.bossRoleName);
            if (repRole && message.member.roles.has(bossRole.id)) permlvl = 3;
>>>>>>> 6d0bd0e059409c1e02589882cf847ecb02ddb521
        } catch (e) {
            console.warn("bossRoleName not found. Skipping Boss (level 3) check");
        }
        try {
          //DM level.
<<<<<<< HEAD
            let DMRole = message.guild.roles.find('name', bot.config.DMRoleName);
            if (DMRole && message.member.roles.has(DMRole.id)) permlvl = 4;
        } catch (e) {
            console.warn("DMRoleName not found. Skipping DM (level 4) check");
        }
        //Bot Wrangler level.
        let wranglerRole = message.guild.roles.find('name', bot.config.wranglerRoleName);
        if(wranglerRole && message.member.roles.has(wranglerRole.id)) permlvl = 5;

        //Server owner.
        if (message.author.id === message.guild.owner.id) permlvl = 5;

=======
            let adminRole = message.guild.roles.find('name', bot.config.DMRoleName);
            if (adminRole && message.member.roles.has(DMRole.id)) permlvl = 4;
        } catch (e) {
            console.warn("DMRoleName not found. Skipping DM (level 4) check");
        }
        if (message.author.id === message.guild.owner.id) permlvl = 5;
>>>>>>> 6d0bd0e059409c1e02589882cf847ecb02ddb521
        return permlvl;
    };
    bot.log = (type, msg, title) => {
        if (!title) title = "LOG";
        console.log(`${type} | ${title} | ${msg}`);
    };
    bot.awaitReply = async(msg, question, limit = 60000) => {
        const filter = m => m.author.id;
        await msg.channel.send(question);
        try {
            const collected = await msg.channel.awaitMessages(filter, {
                max: 1
                , time: limit
                , errors: ['time']
            });
            return collected.first().content;
        } catch (e) {
            return false;
        }
    };
    bot.clean = async(bot, text) => {
        if (text && text.constructor.name == 'Promise') text = await text;
        if (typeof evaled !== 'string') text = require('util').inspect(text, {
            depth: 0
        });
        text = text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)).replace(bot.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");
        return text;
    };
    global.wait = require('util').promisify(setTimeout);
    global.range = (count, start = 0) => {
        const myArr = [];
        for (var i = 0; i < count; i++) {
            myArr[i] = i + start;
        }
        return myArr;
    };
    process.on('uncaughtException', (err) => {
        let errorMsg = err.stack.replace(new RegExp(`${__dirname}\/`, 'g'), './');
        console.error("Uncaught Exception: ", errorMsg);
    });
    process.on("unhandledRejection", err => {
        console.error("Uncaught Promise Error: ", err);
    });
};
