import Day from '../src/day.js'

describe('Day', () => {

  test('should return a date based on the object parameters', () => {
    let newDay = new Day("04/22/1998");
    expect(newDay.date).toEqual("Wed Apr 22 1998");
  });
});