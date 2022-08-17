const reverse = require('../src/index.js');

test('reverse', () => {
  expect(reverse.reverse('hello')).toEqual('olleh');
  expect(reverse.reverse('')).toEqual('');
});