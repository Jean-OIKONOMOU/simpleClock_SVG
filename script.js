document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    clock();
    requestAnimationFrame(animate);
    textElement.addEventListener("click", () => {
      showDate = !showDate;
    });
  }
});

const hourHand = document.getElementById("hour_hand");
const minuteHand = document.getElementById("minute_hand");
const secondHand = document.getElementById("second_hand");
const timer = document.getElementById("timer");
const textElement = document.getElementById("text");

let showDate = true;

const getTime = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const milliseconds = today.getMilliseconds();
  const day = today.getDate();
  const time = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    day: day,
  };
  return time;
};

const animate = () => {
  let { hours, minutes, seconds, milliseconds, day } = getTime();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours + minutes / 60;
  minutes = minutes + seconds / 60;
  seconds = seconds + milliseconds / 1000;
  textElement.textContent = showDate ? day : ampm;
  hourHand.setAttribute("transform", `rotate(${(360 / 12) * hours})`);
  minuteHand.setAttribute("transform", `rotate(${(360 / 60) * minutes})`);
  secondHand.setAttribute("transform", `rotate(${(360 / 60) * seconds})`);
  requestAnimationFrame(animate);
};

const clock = () => {
  const { hours, minutes, seconds } = getTime();
  timeString = (hours < 10 ? "0" : " ") + hours;
  timeString += (minutes < 10 ? " : 0" : " : ") + minutes;
  timeString +=
    (seconds < 9 ? " : 0" : " : ") + (seconds + 1 == 60 ? "00" : seconds + 1);
  timer.innerText = timeString;
  setTimeout("clock()", 1000);
};
