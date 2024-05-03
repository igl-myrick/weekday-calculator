export default class Day {
  constructor(inputDate) {
    this.date = new Date(inputDate);
    this.dateStr = this.date.toDateString().slice(4);
  }

  getWeekday() {
    const weekday = this.date.getDay();
    if (weekday === 0) {
      return "Sunday";
    } else if (weekday === 1) {
      return "Monday";
    } else if (weekday === 2) {
      return "Tuesday";
    } else if (weekday === 3) {
      return "Wednesday";
    } else if (weekday === 4) {
      return "Thursday";
    } else if (weekday === 5) {
      return "Friday";
    } else if (weekday === 6) {
      return "Saturday";
    } else {
      return "Invalid date";
    }
  }
}