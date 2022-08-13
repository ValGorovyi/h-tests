const capitalize = require('./../src/capitalize')

if (capitalize.capitalize('') !== '') {
  throw new Error('error >> "" ')
}

if (capitalize.capitalize('helo') !== 'Helo') {
  throw new Error('does not work')
}
console.log('its ok');
