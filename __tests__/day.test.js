import Day from '../src/day.js'

describe('Day', () => {
  
  test('should correctly create a Day object from the current time', () => {
    let today = new Day();
    expect(today.date).toEqual("04/30/2024");
  });
});