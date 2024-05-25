const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(client.config.token);

client.on("ready", () => {
    setInterval(() => {
        const oynuyor = "DevCode";
        const index = Math.floor(Math.random() * (oynuyor.length));
  
        client.user.setActivity(`DevCode`, {
          type: "STREAMING",
          url: "https://www.twitch.tv/DevCode"});
  
      }, 10000);
});
