const tesseract = require('tesseract.js');
const TelBot = require('node-telegram-bot-api');
const request = require('request-promise');
const token = '1080271099:AAFXB49LD5ByZy89X5GFpFkjmFaLdPs4jQM';
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
bot.on('message', async function(msg) {
  const newMsg = msg.text;
  if (newMsg != undefined) {
    // Send if text contains 69
    if (newMsg.includes('69') || newMsg.includes('6 9')) {
      executeSixNine(msg);
      return;
    }
  }
  if (msg.photo != undefined) {
    var photo_path;
    // gets path of photo so we can get the photo url
    let url = "https://api.telegram.org/bot" + token + "/getFile?file_id=" + msg.photo[0].file_id;
    photo_path =  JSON.parse(await request(url)).result.file_path
    // should begin to get photo url
    let photo_url = "https://api.telegram.org/file/bot" + token +"/" + photo_path

    tesseract.recognize(
      photo_url,
      'eng'
    ).then(({ data: { text } }) => {
      if (text.includes('69')) {
        executeSixNine(msg)
      }
    })
  }

});

function executeSixNine(last_message) {
  const randomNice = variations[Math.floor(Math.random() * variations.length)];
  bot.sendMessage(last_message.chat.id, randomNice, { reply_to_message_id: last_message.message_id});
}