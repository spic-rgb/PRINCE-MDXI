const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


// Load configuration from config.json
const configData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));



function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MDX~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01IR0tySmU4OHVUUURISHpSdnc2TVFackNEOXVDR3Q0MGVWbFBRN1dGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmlKR3d5UlorYzVrYkxhVHdvZ1Y0VXFMU0RIM3pDMm5CN0M1YTBmM1ZUST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT044dWdldnRkSHNUeTE2MU9VU0JZdDJrVnJFNVhZWmdIT0lBRjl2dmtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtU2ZDNFZFZWRWeG1Camp5TmVWYksvbk14SmQ4U2FCOThkcFE4TXFPbVZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLS1dYT0R5MjNacStvWk5WeGRGS0ZxRUtxZmhGNVA0cDBXTG5NaitPM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxGN0xMVk1rWlgyTndwUk5mWVZmUkxSU0NVMUFGSE5FYkcwUTNaYW85UnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEswQXRPdlhnSkY0cXlGSE1WdzZGQnkwc1M2cVB5czF2R3QvWWtBUFNHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnlTN0crR2FpM3dIb3cwMkI4ZG9wWUxRY2FYbHdhSURPeXlpdWEzTlJuMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZlR1JjdkNvMGZ2U0VaamRFcElYWHlsMTAvbmtYdjYrTFZBOTB2NjJEdEhmOVpwclBQTDhaZlJoaFgzU2dNdXhYUS8ycU9ObTRQU08wTzZpK1pHM0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6Im1jcnFlNDYzOGxtZUxWSVpPTU5CYzA5TUFodXBuTUVxNXQweVJwR0dyYjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik8wZVBqU1oxUWZ5cEZVUXpubExIWVEiLCJwaG9uZUlkIjoiMTFjYTg4NzMtNTVkYS00N2NkLTkzYTctMDQzNDk4Y2JkMTAwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklTS1F5RFhIa2Y1YUJxWWJ0Mi90RFlLQ2JwND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMzZCNEVONU1JRE1FZkxicUR1NUg0S0lOZWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjZHWkI3NzMiLCJtZSI6eyJpZCI6IjI2Mzc3ODg1ODI0Njo5NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLLouG1mOG1lsqz4bWJ4bWQ4bWJIOG2nMqw4bWDy6IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tiWmpiQUVFTXptM01BR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9jOC9TbUpPSUxIbHM2R1hXOXN3c1k1TEZoTElVeVlvbTh1QnlOL3ovaDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVrellVSnVaS0pWR1VMa0ZvVUsyaTFDSWZ2aUtRMm9EUWJ6RDdKL0dZbEZoekF0K3lnVHBVU2V5MTBhT09JMWRmSjRjYUEyY1NHZjdHYUh2SERiTUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJISXBhYzI3eTFsNmFzQTl4WkQ4TndHbUNhMWtCTWxzUFZrZHpPTzVVb3lTNzBsclEyaHBHcW82UldzYlFxVU8ybWRBTWpEYXlHWTNOVStsR3g5YzZBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3ODg1ODI0Njo5NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhSFBQMHBpVGlDeDViT2hsMXZiTUxHT1N4WVN5Rk1tS0p2TGdjamY4LzRmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2MzUwOTM3fQ==",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
OWNER_NUMBER: process.env.OWNER_NUMBER || "263778858246",
OWNER_NAME: process.env.OWNER_NAME || "PRINCE",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
MENU_IMG: process.env.MENU3_IMG || "https://files.catbox.moe/upmwpw.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi 💁🏽 How Can I Assist You. Am alive Now.",
ANTI_LINK: process.env.ANTI_LINK || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "fase",
BOT_NAME: process.env.BOT_NAME || "𝗣𝗥𝗜𝗡𝗖𝗘 𝗠𝗗𝗫",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};



