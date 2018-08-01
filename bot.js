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

     client.user.setActivity("By:REX SRB",{type: 'WATCHING'})

});

client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "log")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
.setThumbnail(member.avatarURL)
  .setImage('https://cdn.discordapp.com/attachments/445560299479629824/474028888088117250/image-1.gif')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});


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




























client.login(process.env.BOT_TOKEN);
