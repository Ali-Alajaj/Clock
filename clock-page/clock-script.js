const secondsElement = document.querySelector('.js-seconds');
const minutesElement = document.querySelector('.js-minutes');
const hoursElement = document.querySelector('.js-hours');

setInterval(() => {
  const second = dayjs().format('ss');
  const minute = dayjs().format('mm');
  const hour = dayjs().format('h');

  secondsElement.innerHTML = second;
  minutesElement.innerHTML = minute;
  hoursElement.innerHTML = hour;
}, 1000);

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