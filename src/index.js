import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import Day from "./day.js";

function handleDateForm(e) {
  e.preventDefault();
  const formInput = document.querySelector("#date-input").value;
  console.log(formInput);
  const newDay = new Day(formInput);
  console.log(newDay);
}

window.addEventListener("load", function() {
  document.querySelector("#date-form").addEventListener("submit", handleDateForm);
});