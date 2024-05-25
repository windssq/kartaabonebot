const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} kalktı ve gitmeye hazır!`)
);
