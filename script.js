document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    clock();
  }
});

const hourHand = document.getElementById("hour_hand");
const minuteHand = document.getElementById("minute_hand");
const secondHand = document.getElementById("second_hand");
const timer = document.getElementById("timer");

const getTime = () => {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let milliseconds = today.getMilliseconds();
  let time = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };
  return time;
};

const animate = () => {
  let { hours, minutes, seconds, milliseconds } = getTime();
  hours = hours + minutes / 60;
  minutes = minutes + seconds / 60;
  seconds = seconds + milliseconds / 1000;
  hourHand.setAttribute("transform", `rotate(${(360 / 12) * hours})`);
  minuteHand.setAttribute("transform", `rotate(${(360 / 60) * minutes})`);
  secondHand.setAttribute("transform", `rotate(${(360 / 60) * seconds})`);
  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

const clock = () => {
  const { hours, minutes, seconds } = getTime();
  timeString = (hours < 10 ? "0" : " ") + hours;
  timeString += (minutes < 10 ? " : 0" : " : ") + minutes;
  timeString +=
    (seconds < 9 ? " : 0" : " : ") + (seconds + 1 == 60 ? "00" : seconds + 1);
  timer.innerText = timeString;
  setTimeout("clock()", 1000);
};
