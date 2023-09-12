const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'ZEROTWO=Vik2AL6A#sutWPh6Cj-2mbfERrdACPu5pNOqhyKbSCV-LfHSO1xk',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://kinflux_user:pCaYpKfU8Dklk4s882d1sOZEYlQPvSU3@dpg-cjvs8kh5mpss73b0l1d0-a.oregon-postgres.render.com/kinflux',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 200,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'true' ,
ANTI_BOT: process.env.ANTI_BOT || 'true',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©𝚉𝙴𝚁𝙾-𝚃𝚆𝙾 𝙼𝙳',
LOGO: process.env.LOGO || `https://github.com/vihangayt0/ZeroTwo-Uploads/blob/main/ZERO-TWO.png?raw=true` 
};
