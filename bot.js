const Discord = require('discord.js');

const bot = new Discord.Client();

const client = new Discord.Client();

const prefix = '#'

client.on('ready', () => {

  console.log('╔[════════════════════════════════════]╗');

  console.log('')

  console.log('            ╔[════════════]╗')

  console.log('              Bot Is Online')

  console.log('            ╚[════════════]╝')

  console.log('')

  console.log(`Logged in as ${client.user.tag}!`);

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log('')

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log('')

  console.log('╚[════════════════════════════════════]╝')

});

client.on('ready', () => {

     client.user.setActivity('Great. Pro',{type: 'streming'})

});


client.on('ready', () => {
});
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });




client.on('message', message => {

if (message.content.startsWith('معلومات الدعوات')) {

let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 

  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;

  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL

  message.guild.fetchInvites().then(invs => {

    let member = client.guilds.get(message.guild.id).members.get(oi);

    let personalInvites = invs.filter(i => i.inviter.id === oi);

    let urll = invs.filter(i => i.inviter.id === oi);

    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);

    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

   let exec = personalInvites.reduce((p, v) => v.inviter);

 let possibleInvites = [['Total de membros recrutados:']];

possibleInvites.push([inviteCount, exec]);

        let user = message.mentions.users.first() || message.author;

        let mem = message.guild.member(user);

        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();

        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

const alpha = new Discord.RichEmbed()

.setAuthor(img)

.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت لسرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)

.setThumbnail(imagemm)

.setColor(0x4959e9);

message.channel.send(alpha);

});

};

  });





let message_handler = {};
    let tolerancia = [4, 3500]; //4 messages in less than 1200ms = spam
    module.exports = function(bot, callback){
      bot.on('message', message => {
        if(message.author.bot) return;
        if(!message_handler.hasOwnProperty(message.author.id)){
          message_handler[message.author.id] = {};
          message_handler[message.author.id].ultimamessageTS = message.createdTimestamp;
          message_handler[message.author.id].primeiramessageTS = message.createdTimestamp;
          message_handler[message.author.id].messageTracker = 0;
        }
        var mh = message_handler[message.author.id];
        mh.messageTracker++;
        mh.ultimamessageTS = message.createdTimestamp;
        if(mh.messageTracker >= tolerancia[0] && mh.ultimamessageTS <= (mh.primeiramessageTS + tolerancia[1])){
            callback(message);
        } else {
          setTimeout(function(){
            delete message_handler[message.author.id];
            delete mh;
          }, tolerancia[1]);
        }
      });
    }


client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '#';
    let xp = require("./xp.json");
    
if(cmd === `${prefix}level`) {
if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
   };
 }
   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvlXp = curlvl * 300;
   let difference = nxtLvlXp - curxp;
 
   let lvlEmbed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setColor("purple")
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
}
});


client.on('message',function(message) {
  if(!message.channel.guild) return;
    if (message.content === prefix + "دسكريم") {
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);

if (message.author.bot) return;

var discri = args[0]
let discrim
if(discri){
discrim = discri;
}else{
discrim = message.author.discriminator;
}
if(discrim.length == 1){
discrim = "000"+discrim
}
if(discrim.length == 2){
discrim = "00"+discrim
}
if(discrim.length == 3){
discrim = "0"+discrim
}

const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
return message.channel.send(`
**Found ${users.length} users with the discriminator #${discrim}**
${users.join('\n')}
`);
}
});



client.on('message', function(msg) {
  if(msg.content.startsWith ('معلومات السيرفر')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});


client.on("message", msg => {
  if(msg.content === '#' + "معلوماتي") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});


client.on('voiceStateUpdate', (oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;//ReBeL & Codes
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.username
    if(rebel1 === false && rebel2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ميوت صوتي`)
       .setFooter(`بوآسطهه : ${user}`)
        .setColor('#36393e')
       ch.send(embed)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك الميوت الصوتي `)
       .setFooter(`بواسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === false && codes2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ديفن أو سمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === true && codes2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك عنهه الديفن أو السمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
  })
});

  
  client.on(`guildMemberAdd`, member => {
    let listedusers = (`User1`, `User2`, `User3`, `etc`);
    if (member.id = listedusers) {
        member.kick();
        const lChannel = member.guild.channels.find(`name`, `log`)
        lChannel.send(`${member} has been banned because they are blacklisted!`)
    }

})
  
 

  

  client.on('message', message => {
    if (message.content.startsWith(prefix + "هويتي")) {
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
      var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(": النك نيم",`${h.nickname}`, true) .addField(": #",heg.discriminator, true)
.addField(`: البلينق`,`${h.presence.game && h.presence.game.name || '-'}`,true) .addField(': الحالة',`${h.presence.status}`,true)
.addField(`: الرتب`, `${message.guild.members.get(h.id).roles.map(r => `\`${r.name}\``).slice(1).join('\n') || 'لايوجد رتب'}`,true)                                                    
.setThumbnail(heg.avatarURL);
message.channel.send(id)
}       });


const credits = JSON.parse(readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});









  


  

 




 







 



  

  






  

 



  





 

 

 
 














client.login(process.env.BOT_TOKEN);
