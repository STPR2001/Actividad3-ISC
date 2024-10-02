const mqtt = require("mqtt");
let client;

const connect = () => {
  client = mqtt.connect("mqtt://test.mosquitto.org");

  client.on("connect", () => {
    console.log("Conectado al broker MQTT");
    client.subscribe("simulide/display", (err) => {
      if (!err) {
        console.log("Suscrito al tópico");
      }
    });
  });
};

const onMessage = (callback) => {
  client.on("message", (topic, message) => {
    callback(message.toString());
  });
};

module.exports = { connect, onMessage };
