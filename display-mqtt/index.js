const mqttHandler = require("./mqttHandler");
const uartHandler = require("./uartHandler");
const displayHandler = require("./displayHandler");

mqttHandler.connect();

mqttHandler.onMessage((message) => {
  console.log(`Mensaje recibido: ${message}`);

  displayHandler.updateDisplay(message);

  uartHandler.sendToUART(message);
});
