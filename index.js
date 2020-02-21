process.env.NTBA_FIX_319 = 1; // prevent deprecated warning on startup
require("dotenv").config();

const tesseract = require("tesseract.js");
const TelBot = require("node-telegram-bot-api");
const TOKEN = process.env.TOKEN;
const bot = new TelBot(TOKEN, {
  polling: true
});
// Variations of Nice
const variations = [
  "Nice",
  "Nicee",
  "Noice",
  "ładny",
  "niice",
  "Obligatory Nice",
  "Umma nice",
  "hehe yeah boi",
  "ooh ya",
  "( ͡° ͜ʖ ͡°)",
  "damn bruh",
  "hehehe",
  "I concur-",
  "did I hear 69?!",
  "ikr"
];

/**
 * Responds to a message with a reply from variations
 * @param {Object} message The message to reply to
 */
function executeSixNine(message) {
  const randomNice = variations[Math.floor(Math.random() * variations.length)];
  bot.sendMessage(message.chat.id, randomNice, {
    reply_to_message_id: message.message_id
  });
}

// On New Message
bot.on("message", (msg) => {
  if (msg.text !== undefined) {
    // Send if text contains 69
    if (msg.text.includes("69") || msg.text.includes("6 9")) {
      executeSixNine(msg);
      return;
    }
  }
  if (msg.photo !== undefined) {
    bot.getFileLink(msg.photo[0].file_id).then((link) => {
      tesseract.recognize(link, "eng").then(({
        data: {
          text
        }
      }) => {
        if (text.includes("69") || text.includes("6 9")) {
          executeSixNine(msg);
        }
      });
    });
  }
});
