import Day from '../src/day.js'

describe("Day", () => {

  test("should return a date based on the object parameters", () => {
    let newDay = new Day("04/22/1998");
    expect(newDay.dateStr).toEqual("Apr 22 1998");
  });
});

describe("Day.prototype.getWeekday", () => {

  test("should return a day of the week according to the object's value", () => {
    let newDay = new Day("04/22/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Wednesday")
  });
});