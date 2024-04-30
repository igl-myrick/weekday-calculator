import Day from '../src/day.js'

describe('Day', () => {
  
  test('should correctly create a Day object from the current time', () => {
    let today = new Day();
    expect(today.date).toEqual("04/30/2024");
  });

  test('should return a date based on the object parameters', () => {
    let newDay = new Day("04/22/1998");
    expect(newDay.date).toEqual("April 22, 1998");
  });
});