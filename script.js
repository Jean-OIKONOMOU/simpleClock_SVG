document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const hourHand = document.getElementById("hour_hand");
const minuteHand = document.getElementById("minute_hand");
const secondHand = document.getElementById("second_hand");
const timer = document.getElementById("timer");

const getTime = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  let time = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  return time;
};

const animate = () => {
  const { hours, minutes, seconds } = getTime();
  hourHand.setAttribute("transform", `rotate(${(360 / 12) * hours})`);
  minuteHand.setAttribute("transform", `rotate(${(360 / 60) * minutes})`);
  secondHand.setAttribute("transform", `rotate(${(360 / 60) * seconds})`);
  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

const initApp = () => {
  const { hours, minutes, seconds } = getTime();
  timeString = (hours < 10 ? "0" : " ") + hours;
  timeString += (minutes < 10 ? " : 0" : " : ") + minutes;
  timeString += (seconds < 10 ? " : 0" : " : ") + seconds;
  timer.innerText = timeString;
  setTimeout("initApp()", 1000);
};
