const updateDisplay = (message) => {
  console.log(`Mostrando en LCD: ${message}`);
  console.log(`Encendiendo LEDs con el mensaje: ${message}`);
};

module.exports = { updateDisplay };
