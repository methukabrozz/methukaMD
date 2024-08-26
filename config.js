const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| 'EDlHRS6S#UbjLPDId9EpgdkwbNhOHHxmHNP_L_O0BeGqXHZqdNWs',
ALIVE_IMG:  process.env.ALIVE_IMG || 'https://telegra.ph/file/de735f458933d1601b361.png',
ALIVE_MSG:  process.env.ALIVE_MSG || '🔰methukaMD🐱‍👓🔰 is alive now
    💻-Methuka Nisalitha 🚀The fastest WA BOT'    
};
