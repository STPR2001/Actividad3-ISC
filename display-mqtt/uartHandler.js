const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const serialPort = new SerialPort({
  path: "COM1",
  baudRate: 9600,
});

const sendToUART = (message) => {
  serialPort.write(`${message}\n`, (err) => {
    if (err) {
      return console.log("Error al escribir en UART:", err.message);
    }
    console.log("Mensaje enviado a UART:", message);
  });
};

module.exports = { sendToUART };
