let time = 25 * 60; // 25 minutes in seconds
let timerInterval;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 25 * 60;
  updateTimer();
}

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').innerHTML = display;
  if (time <= 0) {
    clearInterval(timerInterval);
    alert('Time is up!');
  } else {
    time--;
  }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetTimer);