const highAndLow = require('../src/highAndLow.js');

describe('highAndLow function', () => {
  it('should return the highest and lowest numbers for a given string of space separated numbers', () => {
    expect(highAndLow('1 2 3 4 5')).toBe('5 1');
    expect(highAndLow('1 2 -3 4 5')).toBe('5 -3');
    expect(highAndLow('1 9 3 4 -5')).toBe('9 -5');
    expect(highAndLow('42')).toBe('42 42');
  });
});