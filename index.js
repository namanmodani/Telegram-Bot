const TelBot = require('node-telegram-bot-api');
const request = require('request');
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
  // if (msg.text == undefined) {
  //   return;
  // }
  if (msg.photo != undefined) {
    var photo_path;
    // gets path of photo so we can get the photo url
    let url = "https://api.telegram.org/bot" + token + "/getFile?file_id=" + msg.photo[0].file_id;
    request(url, function(err, res, body) {
     photo_path = JSON.parse(body).result.file_path
    });

    // should begin to get photo url
    let ax = "https://api.telegram.org/file/bot" + token +"/" + photo_path
    request(ax, function(err, res, body) {
      photo_url = body
    });
  }1080271099:AAFXB49LD5ByZy89X5GFpFkjmFaLdPs4jQM
  const newMsg = msg.text;

  // Send if text contains 69
  if (newMsg.includes('69') || newMsg.includes('6 9')) {
    // Select Random variation of Nice
    const randomNice =
      variations[Math.floor(Math.random() * variations.length)];
    bot.sendMessage(msg.chat.id, randomNice, { reply_to_message_id: msg.message_id});
  }

});
