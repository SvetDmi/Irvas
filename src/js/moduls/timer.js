const timer = (selector, deadline) => {
  function addZero(num) {
    if (num <= 9) {
      return "0" + num;
    } else return num;
  }
  const getTime = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((total / 1000) % 60),
      minutes = Math.floor((total / 1000 / 60) % 60),
      hours = Math.floor((total / 1000 / 60 / 60) % 24),
      days = Math.floor(total / 1000 / 60 / 60 / 24);

    return { total, seconds, minutes, hours, days };
  };

  const setTimer = (id, endtime) => {
    const timer = document.querySelector(id),
      seconds = document.getElementById("seconds"),
      minutes = document.getElementById("minutes"),
      hours = document.getElementById("hours"),
      days = document.getElementById("days"),
      interval = setInterval(updateTimer, 1000);
    updateTimer();

    function updateTimer() {
      let time = getTime(endtime);
      seconds.textContent = addZero(time.seconds);
      minutes.textContent = addZero(time.minutes);
      hours.textContent = addZero(time.hours);
      days.textContent = addZero(time.days);
      if (time.total <= 0) {
        clearInterval(interval);
        seconds.textContent = "00";
        minutes.textContent = "00";
        hours.textContent = "00";
        days.textContent = "00";
      }
    }
  };

  setTimer(selector, deadline);
};
export default timer;
