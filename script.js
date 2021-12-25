document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  let timer = document.getElementById("timer");
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  timeString = (hours < 10 ? "0" : " ") + hours;
  timeString += (minutes < 10 ? " :0" : " : ") + minutes;
  timeString += (seconds < 10 ? " :0" : " : ") + seconds;
  timer.innerText = timeString;
  setTimeout("initApp()", 1000);
};
