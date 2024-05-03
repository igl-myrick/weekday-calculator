import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import Day from "./day.js";

function displayFormInput(e) {
  e.preventDefault();
  if (document.querySelector("p")) {
    const lastResult = document.querySelector("p");
    lastResult.remove();
  }
  const formInput = document.querySelector("#date-input").value;
  const outputDiv = document.getElementById("response");
  const outputP = document.createElement("p");
  
  const newDay = new Day(formInput.split("-").join("/"));
  const userDay = newDay.getWeekday();
  const userDateStr = newDay.dateStr;
  outputP.innerText = `${userDateStr} is a ${userDay}.`;
  
  outputDiv.append(outputP);
  document.body.append(outputDiv);
}

window.addEventListener("load", function() {
  document.querySelector("#date-form").addEventListener("submit", displayFormInput);
});