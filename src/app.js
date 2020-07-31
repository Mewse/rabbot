var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./token.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       logger.info(channelID);
        args = args.splice(1);
        switch(cmd) {
            // !ping
//            case 'cid':
//                bot.sendMessage({
//                    to: channelID,
//                    message: 'Channel ID: ' + channelID
//                });
//		    break;
		    case 'boop':
		        bot.sendMessage({
                    to: channelID,
                    message: '*bunny noises*'
                });
		    break;
            // Just add any case commands if you want to..
        }
     }
});

var CronJob = require('cron').CronJob;
var ukJob = new CronJob('0 0 0 1 * *', function() {
  console.log('Rabbit rabbit from England!');
  bot.sendMessage({
    to: "653402145575403530",
    message: 'Rabbit rabbit from England!'
  });
}, null, true, 'Europe/London');
ukJob.start();

var ncJob = new CronJob('0 0 0 1 * *', function() {
  console.log('Rabbit rabbit from Leicester!');
  bot.sendMessage({
    to: "653402145575403530",
    message: 'Rabbit rabbit from Leicester!'
  });
}, null, true, 'America/New_York');
ncJob.start();

var nebJob = new CronJob('0 0 0 1 * *', function() {
  console.log('Rabbit rabbit from Nebraska!');
  bot.sendMessage({
    to: "653402145575403530",
    message: 'Rabbit rabbit from Nebraska!'
  });
}, null, true, 'America/North_Dakota/New_Salem');
nebJob.start();
