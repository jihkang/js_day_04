// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

var screenWidth;

function checkColor(value) {
  var check = window.screen.width;

  if ((check / 4) * 3 < value && check > value) {
    body.style.backgroundColor = colors[0];
  } else if ((check / 4) * 3 > value && value > check / 2) {
    body.style.backgroundColor = colors[1];
  } else if (check / 4 < value && check > value / 2) {
    body.style.backgroundColor = colors[2];
  } else {
    body.style.backgroundColor = colors[3];
  }
}

function resizeCheck() {
  screenWidth = document.body.clientWidth;
  checkColor(screenWidth);
}

window.addEventListener("resize", resizeCheck);
