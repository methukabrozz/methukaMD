const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please send a correct name ⭕")
  const search = await yts(q)
  const data =  search.videos[0];
  const url = data.url

let desc ='
  ⚜METHUKA-MD⚜YT SONG DOWNLODER🔎

  title: $(data.title)
  description: $(data.description)
  time: $(data.time)
  ago: $(data.ago)
  views: $(data.views)

  PROGRAMMER💻-Methuka Nisalitha
  '
await conn.sendmassage(from,(immage:(url: data.thumbnail),caption:desc),(quoted:mek));

  //download audio
let down = await fg.yta(url)
let downloadurl = down.dl_url

 //send audio msg 
await conn.sendmassage(from,())
}catch(e){
console.log(e)
  reply('s{e}')
}
}}
