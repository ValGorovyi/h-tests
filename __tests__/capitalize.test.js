const capitalize = require('../src/capitalize')
const assert =  require('assert');

test('capitalixe', () => {
  expect(capitalize.capitalize('')).toEqual('');
  expect(capitalize.capitalize('helo')).toEqual('Helo');
});
