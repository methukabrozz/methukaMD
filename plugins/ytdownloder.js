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
await conn.sendmassage(from,{immage:{url: data.thumbnail},caption:desc},{quoted:mek});

  //download audio
let down = await fg.yta(url)
let downloadurl = down.dl_url
    
 //send audio msg 
await conn.sendmassage(from,{audio:{url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendmassage(from,{document:{url:downloadurl},mimetype:"audio/mpeg",fileName:data.title + ".mp3".caption:"powerd by ✨METHUKA-MD✨yt downloader_____💻-methuka nisalitha"},{quoted:mek})
}catch(e){
console.log(e)
  reply('${e}')
}
})



    //video 

    cmd({
    pattern: "video",
    desc: "download video",
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
  ⚜METHUKA-MD⚜YT video DOWNLODER🔎

  title: $(data.title)
  description: $(data.description)
  time: $(data.time)
  ago: $(data.ago)
  views: $(data.views)

  PROGRAMMER💻-Methuka Nisalitha
  '
await conn.sendmassage(from,{immage:{url: data.thumbnail},caption:desc},{quoted:mek});

  //download video
let down = await fg.ytv(url)
let downloadurl = down.dl_url

 //send video msg 
await conn.sendmassage(from,{video:{url:downloadurl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendmassage(from,{document:{url:downloadurl},mimetype:"video/mp4",fileName:data.title + ".mp4".caption:"powerd by ✨METHUKA-MD✨yt downloader_____💻-methuka nisalitha"},{quoted:mek})
}catch(e){
console.log(e)
  reply('${e}')
}
})

