import Day from '../src/day.js'

describe("Day", () => {

  test("should store a new Day object based on the input string", () => {
    let newDay = new Day("04/22/1998");
    let newDate = new Date("04/22/1998");
    expect(newDay.date).toEqual(newDate);
  });

  test("should return a date based on the object parameters", () => {
    let newDay = new Day("04/22/1998");
    expect(newDay.dateStr).toEqual("Apr 22 1998");
  });
});

describe("Day.prototype.getWeekday", () => {

  test("should return a day of the week according to the object's value", () => {
    let newDay = new Day("04/19/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Sunday");
  });

  test("should return a day of the week according to the object's value", () => {
    let newDay = new Day("04/20/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Monday");
  });

  test("should return a day of the week according to the object's value", () => {
    let newDay = new Day("04/21/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Tuesday");
  });

  test("should return a day of the week according to the object's value", () => {
    let newDay = new Day("04/22/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Wednesday");
  });

  test("should return a day of the week according to the object's value", () => {
    let newDay = new Day("04/23/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Thursday");
  });

  test("should return a day of the week according to the object's value", () => {
    let newDay = new Day("04/24/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Friday");
  });

  test("should return a day of the week according to the object's value", () => {
    let newDay = new Day("04/25/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Saturday");
  });

  test("should return an error for an invalid date", () => {
    let newDay = new Day("04/33/1998");
    const weekday = newDay.getWeekday();
    expect(weekday).toEqual("Invalid date");
  });
});