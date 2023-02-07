const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

// Делаем расчёты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`June 17 ${currentYear} 00:00:00`);

// УСТАНАВЛИВАЕМ ГОД НА СТРАНИЦУ
year.innerText = currentYear;

function updateCounter() {
  const currentTime = new Date();
  const diff = nextYear - currentTime;

  // ПЕРЕВОД В ДНИ
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

  // ПЕРЕВОД В часы
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

  // ПЕРЕВОД В МИНУТЫ
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

  // ПЕРЕВОД В СЕКУНДЫ
  const secondsLeft = Math.floor(diff / 1000) % 60;

  console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

setInterval(updateCounter, 1000);

setTimeout(function () {
  preloader.remove();
  countdown.style.display = "flex";
}, 1000);
