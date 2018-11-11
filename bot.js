const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "#";
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
client.user.setActivity("SRB BEST.",{type: "Streaming"})
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
      level: 0,
   };
 }
   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvlXp = curlvl * 300;
   let difference = nxtLvlXp - curxp;
 
   let lvlEmbed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setColor("GOLD")
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
}
});


client.on('message',function(message) {
  if(!message.channel.guild) return;
    if (message.content === prefix + "discrim") {
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


   client.on('message', message =>{

    if(message.content === '#ping'){

let start = Date.now(); message.channel.send('pong').then(message => { 

message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);

    });

    }

});       
 
        
client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    
   let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و
}).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و
  }
});

client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Power.'));
});
 
client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يوم استخدامات الرابط : 1
**`)


    }
});

  
  
  
 

  

  






 


    








  


  

 




 







 



  

  






  

 



  






  

  
          

client.on('message', message => {
          

           if (message.content.startsWith(prefix + "id")) {
           if (message.channel.id !== "498526837492809739") return;
            
            if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
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
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
    message.channel.sendEmbed(id);
})
}
    

         
     });


 
  









   

const d = require("discord.js");
const fs = require("fs");
var json = JSON.parse(fs.readFileSync("json.json", "utf8"));

client.on("message", (message) => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (!message.content.startsWith(prefix)) return;
    switch(command) {
        case "اسكت" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : false,
                CONNECT : false
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : true};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Muted in the server!🤐**`);
        break;
        case "تكلم" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : null,
                CONNECT : null
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : false};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Unmuted!😀**`);
    }
})

.on("guildMemberAdd", (member) => {
    if(json[member.guild.id + member.user.id]) {
        if (json[member.guild.id + member.user.id].muted == true) {
            member.guild.channels.forEach(c => {
                c.overwritePermissions(member.user.id, {
                    SEND_MESSAGES : false,
                  CONNECT : false
                })
            })
        }
    }
})


 client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "امسح")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "تــم مسح الشات",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(9000)});
                            }
  
       
  });                 

 
client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})






 


client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '#لون'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
 
  
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
  
 
 client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'الوان'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length > 0)
   
 
if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
    }
});
 
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":information_source:  #kick @NAWAF يجب تحديد شخص ");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طرده**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} kicked from the server ! :airplane: **  `)

}
});  
    


    
   
     
   
   
   
    
   
    
  
      
   
  
 

 
         



           


                              
      
           
                          




        
   
 



 



    
 

 
 


 
  











            
var dat = JSON.parse("{}");

function forEachObject(obj, func) {

    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })

}

client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.find("name", "CLAN SRB")

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        })

    })

})

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.find('name', 'chat');

    if (!channel) {

        console.log("!channel fails");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('made it till here!');

    var guild;

    while (!guild)

        guild = client.guilds.find("name", "CLAN SRB")

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

                    console.log(3);

                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)

 channel.send(`تم دعوته بواسطة ${Invite.inviter} `)            

 }

            dat[Inv] = Invite.uses;

        })

    })

});
          


 client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "log")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});        
                   
                      
                     


 
            
           
       const Jimp = require('jimp');
client.on('message', message => {
	if (message.content.startsWith(`ship`)) {
        let replies = [`Will Never Work`, `Slight Chance of Working`, `👀`, `Can Work`, `Could Work`, `High Chance of Working`, `Will Work <3`, `A Great Match <3`, `PERFECT MATCH ❤`]
        let result = Math.floor(Math.random() * replies.length);
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        if(!mUser) return message.channel.send(`Please specifify two users next time!`)
        var imagetobase = `https://cdn.discordapp.com/attachments/470109023807602699/471821113261817866/Shipping.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(866, 866)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(866, 866)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
                    mydude.quality(60)
                    mydude.print(font, 635, 1717, `${message.author.username}`)
                    mydude.composite( imagetouse, 784, 797 )
                    mydude.composite( imagetouse2, 2191, 797)
                    mydude.write("saveme.jpg")
                    mydude.getBuffer(`image/jpeg`, (err, buf) => {
                        if (err) return err;
                        message.channel.send({files: [{attachment: buf, name: `saveme.jpg`}] })
                        message.channel.send(replies[result])
                        message.channel.send(`MADE BY COLONIAL#1923`)
                    });
                });
            });}
        )});
    };
})




const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));
client.on("message", message => {
    fs.writeFile('./suck.json', JSON.stringify(suck));
});
client.on('ready', () => {
    setInterval(function(){
        client.guilds.forEach(g => {
            if (suck[g.id]) {
                if (suck[g.id].role) {
                    var role = g.roles.get(suck[g.id].role);
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
                };
            };
        });
    }, 1500);
});
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");
    var args = message.content.split(" ");
    var command = args[0].slice(prefix.length);
    switch(command) {
        case "rainbow" :
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("no no");
        message.guild.createRole({name : "rainbow", color : "RANDOM"}).then(r => {
            r.edit({color : "RANDOm"});
            suck[message.guild.id] = {role : r.id};
        });
    };
});


    




let points = {}

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
لمعرفة نقطاك الرجاء كتابة %نقاطي**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let userData = points[message.author.id];
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    let userData = points[message.author.id];
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setColor('#000000')
    .setDescription(`نقاطك: \`${userData.points}\``)
    message.channel.sendEmbed(embed)
  }

  
});
 


 


      

 

 

 
 














client.login(process.env.BOT_TOKEN);
