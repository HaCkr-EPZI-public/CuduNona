const { cmd, commands } = require('../command');
const config = require('../config');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  jsonformat,
} = require('../lib/functions');

cmd({
    pattern: "vv",
    desc: "For Sve Viewonce msg.",
    category: "main",
    react: "👧🏻",
    filename: __filename
}, async (message) => {
   if (!message.reply_message.viewones) return await message.reply("_*Reply to a view once*_");
   return await message.client.forwardMessage(message.chat, message.reply_message.message, { readViewOnce: true });
});
