import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import Day from "./day.js";

function handleDateForm(e) {
  e.preventDefault();
  const formInput = document.querySelector("#date-input").value;
  const formOutput = formInput.split("-").join("/");
  const newDay = new Day(formOutput);
  return newDay;
}

window.addEventListener("load", function() {
  document.querySelector("#date-form").addEventListener("submit", handleDateForm);
});