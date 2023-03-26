let timerElement = document.createElement("div");
timerElement.style.position = "fixed";
timerElement.style.top = "0";
timerElement.style.right = "0";
timerElement.style.backgroundColor = "white";
timerElement.style.padding = "10px";
timerElement.style.display = "flex";
timerElement.style.alignItems = "center";
document.body.appendChild(timerElement);

let timerText = document.createElement("div");
timerText.textContent = "00:00";
timerText.style.marginRight = "10px";
timerElement.appendChild(timerText);

let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.style.marginRight = "10px";
resetButton.style.display = "none";
resetButton.addEventListener("click", function () {
  clearInterval(timer);
  timerText.textContent = "00:00";
  button30.style.display = "";
  button45.style.display = "";
  button60.style.display = "";
  resetButton.style.display = "none";
  stopButton.style.display = "none";
});
timerElement.appendChild(resetButton);

let button30 = document.createElement("button");
button30.textContent = "30";
button30.style.marginRight = "10px";
button30.addEventListener("click", function () {
  button30.style.display = "none";
  button45.style.display = "none";
  button60.style.display = "none";
  resetButton.style.display = "";
  stopButton.style.display = "";
  startTimer(30 * 60 * 1000);
});
timerElement.appendChild(button30);

let button45 = document.createElement("button");
button45.textContent = "45";
button45.style.marginRight = "10px";
button45.addEventListener("click", function () {
  button30.style.display = "none";
  button45.style.display = "none";
  button60.style.display = "none";
  resetButton.style.display = "";
  stopButton.style.display = "";
  startTimer(45 * 60 * 1000);
});
timerElement.appendChild(button45);

let button60 = document.createElement("button");
button60.textContent = "60";
button60.style.marginRight = "10px";
button60.addEventListener("click", function () {
  button30.style.display = "none";
  button45.style.display = "none";
  button60.style.display = "none";
  resetButton.style.display = "";
  stopButton.style.display = "";
  startTimer(60 * 60 * 1000);
});
timerElement.appendChild(button60);

let isTimerRunning = false;
let remainingTime = 0;
let stopButton = document.createElement("button");
stopButton.textContent = "Stop";
stopButton.style.display = "none";
stopButton.addEventListener("click", function () {
  if (isTimerRunning) {
    clearInterval(timer);
    isTimerRunning = false;
    stopButton.textContent = "Play";
  } else {
    stopButton.textContent = "Stop";
    isTimerRunning = true;
    startTimer(remainingTime);
  }
});
timerElement.appendChild(stopButton);

let timer = null;

function startTimer(duration) {
  isTimerRunning = true;
  let startTime = Date.now();
  timer = setInterval(function () {
    let elapsedTime = Date.now() - startTime;
    remainingTime = duration - elapsedTime;
    let minutes = Math.floor(remainingTime / 1000 / 60);
    let seconds = Math.floor((remainingTime / 1000) % 60);
    timerText.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    if (remainingTime <= 0) {
      clearInterval(timer);
      timerText.textContent = "Time up!";
      resetButton.style.display = "";
      stopButton.style.display = "none";
    } else if (minutes == 15 && seconds == 0) {
      alert("Only 15 minutes remaining!");
    } else if (minutes == 30 && seconds == 0) {
      alert("Only 30 minutes remaining!");
    }
  }, 1000);
}
