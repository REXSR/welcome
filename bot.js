const Discord = require('discord.js');

const bot = new Discord.Client();

const client = new Discord.Client();

const prefix = '+'

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

     client.user.setActivity("SRB BEST",{type: 'WATCHING'})

});



let sw = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))
 
    client.on('message', message => {
const Canvas = require("canvas") // npm i canvas
const fs = require("fs") // npm i fs
 
        let mothed = ['text', 'embed', 'image'];
        let sets = message.content.split(" ").slice(1).join(" ")
        let style = message.content.split(" ").slice(2).join(" ")
        let stym = message.content.split(" ").slice(3).join(" ")
        let msz = message.content.split(" ").slice(2).join(" ")
        let ch = message.content.split(" ").slice(2).join(" ")
        let r = message.content.split(" ").slice(4).join(" ")
 
 
        if(message.content.startsWith(prefix + "wlc")) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
            if(!sw[message.guild.id]) sw[message.guild.id] = {
                cha: "wlc",
                msz: "WELCOME TO SERVER",
                styler: "wlc"
            };
 
            if(!sets) {
                message.channel.send(`**Usage:
            ${prefix}setWlc style <text, image, embed>
            ${prefix}setWlc msg <message>
            ${prefix}setWlc channal <channel name>**`)
            }
 
            if(!mothed) {
                message.channel.send(`**Usage: ${prefix}setWlc style <text, imgae, embed>**`)
            }
 
            if(message.content === prefix + 'wlc') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                sw[message.guild.id].styler = 'image'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)
            }
 
            if(message.content === prefix + 'wlc') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                 sw[message.guild.id].styler = 'embed'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)            }
 
            if(message.content === prefix + 'wlc') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                 sw[message.guild.id].styler = 'text'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)
            }
 
        }
 
        if(message.content.startsWith(prefix + "wlc")) {
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You need `Manage Messages` permission**")
            if(!msz) {
                message.channel.send("Usage: <setWlc msg <message>")
            } else {
                message.channel.send(`**Your server welcome message has been changed to __${msz}__**`)
                sw[message.guild.id].msk = msz
            }
        }
 
        if(message.content.startsWith(prefix + "wlc")) {
            if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
            if(!ch) {
                message.channel.send("Usage: <setWlc channel <channel name>")
            }
            let chn = message.guild.channels.find("name", ch)
            if(!chn) {
                message.channel.send("**I can't find this channel**")
            }
            else {
                 sw[message.guild.id].cha = chn.name
                 message.channel.send(`**Your server welcome channel has been changed to __${chn.name}__**`)
                 }
        }
 
        fs.writeFile('./setWlc.json', JSON.stringify(sw), (err) => {
if (err) console.error(err);
})
})
 
 
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find("name", sw[member.guild.id].cha)
 
    if(sw[member.guild.id].styler === "text") {
        channel.sendMessage(`<@${member.user.id}>, ${sw[member.guild.id].msk}`)
    }
 
    if(sw[member.guild.id].styler === "embed") {
 
        const embed = new Discord.RichEmbed()
        .setTitle("Member joind.")
        .setColor("GREEN")
        .setThumbnail(member.user.avatarURL)
        .setDescription(`**${sw[member.guild.id].msk}**`)
        .addField("**Member name**", `[<@${member.user.id}>]`,true)
        .addField("**Now we are**", `[${member.guild.memberCount}]`,true)
        channel.sendMessage(`<@${member.user.id}>`)
        channel.sendEmbed(embed)
    }
 
    if(sw[member.guild.id].styler === "image") {
        if (member.user.bot) return;
const w = ['./image.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(749, 198),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();
 
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);
 
})
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
 
ctx.font = '35px Aeland';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(" Welcome to " + member.guild.name , 440, 25);
 
                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 420, 100);
 
                         ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(sw[member.guild.id].msk, 410, 170);
 
 
                        //Avatar
                        let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(115, 100, 90, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 5, 5, 200, 200);
                                 channel.sendMessage(`<@${member.user.id}>`)
        channel.sendFile(canvas.toBuffer())
 
 
 
})
})
 
    }
 
})


















client.on('guildMemberRemove', member => {

    var embed = new Discord.RichEmbed()

    .setAuthor(member.user.username, member.user.avatarURL)

    .setThumbnail(member.user.avatarURL)

    .setTitle(`خرج عضو`)

    .setDescription(`الى اللقاء...`)

    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)

    .setColor('RED')

    .setFooter(`SRB Bot`, '')

var channel =member.guild.channels.find('name', 'wlc')

if (!channel) return;

channel.send({embed : embed});

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
























client.login(process.env.BOT_TOKEN);
