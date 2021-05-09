const countdown = () => {

    const countDate = new Date('May 20, 2021 00:00:00').getTime()
    console.log(countDate)

    // Current time
    const now = new Date().getTime()

    // Difference between count date and current time

    const gap = countDate - now;

    // Time works

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate

    const days = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = days;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

}

countdown()