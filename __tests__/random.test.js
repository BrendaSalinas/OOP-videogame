
const checkIfEqual = require('../lib/random.js');

test('checks if 10 is equal to 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});