const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = '1 Jan 2024';

function countIn() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    
    const newSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(newSeconds/3600/24);
    const hours = Math.floor(newSeconds/3600) % 24;
    const mins = Math.floor(newSeconds/60) % 60;
    const seconds = Math.floor(newSeconds) % 60;
    console.log(days,hours,mins,seconds);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHMTL = seconds;
    
}
countIn();

setInterval(countIn,1000);
