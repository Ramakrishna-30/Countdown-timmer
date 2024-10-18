// Select countdown elements
const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

// Set the target date (New Year 2025)
const targetDate = new Date('January 1, 2025 00:00:00').getTime();

// Update countdown every second
const updateCountdown = () => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown values
  daysEl.textContent = days < 10 ? `0${days}` : days;
  hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
  minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;

  // If the countdown is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').innerHTML = "<h2>Happy New Year!</h2>";
  }
};

// Call updateCountdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to show countdown immediately
updateCountdown();
