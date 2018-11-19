const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


client.on('ready', async() => {
var server = "Id server"; // 512532251850833934
var channel = "id room";//514182082855960576
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam ,  , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , ')
    },400);
})

client.login(NTEzNDg4ODQ2MDc2MjQ4MDY0.DtS1TQ.qXC1Y1p0hI3N6239BAnsYsLkL-o);







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
