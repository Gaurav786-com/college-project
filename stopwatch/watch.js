let hours = 0;
let min = 0;
let sec = 0;
let time;
const display = document.querySelector("#display");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
start.addEventListener("click", () => {
  time = setInterval(() => {
    sec += 10;
    if (sec == 60) {
      sec = 0;
      min += 1;
      if (min == 60) {
        min = 0;
        hours += 1;
      }
    }
    display.textContent = `${hours}:${min}:${sec}`;
  }, 100);
});
stop.addEventListener("click", () => {
  clearInterval(time);
});
reset.addEventListener("click", () => {
  clearInterval(time);
  count = 0;
  display.textContent = "0:0:0";
});
