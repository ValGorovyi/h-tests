const capitalize = require('./../src/capitalize')
const assert =  require('assert');


assert.equal(capitalize.capitalize(''), '');

assert.equal(capitalize.capitalize('helo'), 'Helo');

console.log('its ok');
