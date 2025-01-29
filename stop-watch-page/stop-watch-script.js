const startButton = document.querySelector('.js-start-button');
const timeContainer = document.querySelector('.js-time');

startButton.addEventListener('click', () => {
  startStopWatch();
  if (startButton.innerHTML === 'Start') {
    startButton.innerHTML = 'Stop';
    timeContainer.classList.add('is-working');
    startButton.classList.add('start-button-stop');
  } else {
    startButton.innerHTML = 'Start';
    timeContainer.classList.remove('is-working');
    startButton.classList.remove('start-button-stop');
  }
});

let minutes = 0;
let seconds = 0;

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    minutes = 0;
    seconds = 0;
    document.querySelector('.js-minutes')
      .innerHTML = minutes.toString().padStart(2, '0');
    document.querySelector('.js-seconds')
      .innerHTML = seconds.toString().padStart(2, '0');
  });

let isWorking = false;

let intervalId;
function startStopWatch() {
 if (!isWorking) {
  isWorking = true;
  intervalId = setInterval(() => {
    isWorking = true;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      document.querySelector('.js-minutes')
        .innerHTML = minutes.toString().padStart(2, '0');
    }
    document.querySelector('.js-seconds')
      .innerHTML = seconds.toString().padStart(2, '0');
  },1000);
 } else {
  isWorking = false;
  clearInterval(intervalId);
 };
};

const nav = document.querySelector('nav');
let isShowingNav = false;

document.querySelector('.js-nav-button')
  .addEventListener('click', () => {
    if (!isShowingNav) {
      isShowingNav = true;
      nav.classList.add('click')
    } else {
      isShowingNav = false;
      nav.classList.remove('click');
    }
     
  });