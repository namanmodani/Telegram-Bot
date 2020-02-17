const TelBot = require('node-telegram-bot-api');

const token = '';
const bot = new TelBot(token, { polling: true });

// Variations of Nice
const variations = [
  'Nice',
  'Nicee',
  'Noice',
  'ładny',
  'niice',
  'Obligatory Nice',
  'Umma nice',
  'hehe yeah boi',
  'ooh ya',
  '( ͡° ͜ʖ ͡°)',
  'damn bruh',
  'hehehe',
  'I concur-',
  'did I hear 69?!',
  'ikr'
];

// On New Message
bot.on('message', msg => {
  if (msg.text == undefined) {
    return;
  }

  const newMsg = msg.text;

  // Send if text contains 69
  if (newMsg.includes('69') || newMsg.includes('6 9')) {
    // Select Random variation of Nice
    const randomNice =
      variations[Math.floor(Math.random() * variations.length)];
    bot.sendMessage(msg.chat.id, randomNice, { reply_to_message_id: msg.message_id});
  }
});
