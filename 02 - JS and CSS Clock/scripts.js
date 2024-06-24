const clockHour = document.querySelector(".clock_hour");
const clockMinutes = document.querySelector(".clock_minutes");
const clockSecond = document.querySelector(".clock_second");

setInterval(() => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  clockSecond.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  clockMinutes.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  clockHour.style.transform = `rotate(${hourDegrees}deg)`;
}, 1000);
