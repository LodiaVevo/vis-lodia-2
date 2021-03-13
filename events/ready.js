const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const Settings = require("../Settings/Settings.json");

var prefix = Settings.BotSettings.prefix;

module.exports = client => {
  console.log(
    `[OLUMLU] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[OLUMLU] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");
  var oyun = [Settings.BotSettings.botStatus,];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity("Lodia 💙 Vis");
  }, 2 * 2500);
};

