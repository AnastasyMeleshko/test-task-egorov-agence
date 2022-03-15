// let countDownDate = new Date("Dec 31, 2022, 00:00:00").getTime();
// let secondInMillisecond = 1000;
// let secondsInMinute = 60;
// let minutesInHour = 60;
// let hoursInDay = 24;
//
// let countDownFunction = setInterval(function () {
//     let now = new Date().getTime();
//     let distance = countDownDate - now;
//     let days = Math.floor(distance / (secondInMillisecond * secondsInMinute * minutesInHour * hoursInDay));
//     let hours = Math.floor((distance % (secondInMillisecond * secondsInMinute * minutesInHour * hoursInDay)) /
//         (secondInMillisecond * secondsInMinute * minutesInHour));
//     let minutes =  Math.floor((distance % (secondInMillisecond * secondsInMinute * minutesInHour)) /
//         (secondInMillisecond * secondsInMinute));
//     let seconds = Math.floor(distance % (secondInMillisecond * secondsInMinute) / secondInMillisecond);
//
//     document.querySelector(".timer-active").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
//
//     if (distance < 0) {
//         clearInterval(countDownFunction);
//         document.querySelector(".timer-active").innerHTML = `The time is over`;
//     }
//
// }, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const downDate = new Date('Dec 31, 2022, 00:00:00');

    const daysVal = document.querySelector('.time-count-days .time-count-val');
    const hoursVal = document.querySelector('.time-count-hours .time-count-val');
    const minutesVal = document.querySelector('.time-count-minutes .time-count-val');
    const secondsVal = document.querySelector('.time-count-seconds .time-count-val');

    const daysText = document.querySelector('.time-count-days .time-count-text');
    const hoursText = document.querySelector('.time-count-hours .time-count-text');
    const minutesText = document.querySelector('.time-count-minutes .time-count-text');
    const secondsText = document.querySelector('.time-count-seconds .time-count-text');

    // function declOfNum(number, titles) {
    //     let cases = [2, 0, 1, 1, 1, 2];
    //     return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    // }

    const timeCount = () => {
        let now = new Date();
        let leftUntil = downDate - now;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent =	hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        daysText.textContent = 'days';
        hoursText.textContent = 'hours';
        minutesText.textContent = 'minutes';
        secondsText.textContent = 'seconds';
    };

    timeCount();
    setInterval(timeCount, 1000);
});
