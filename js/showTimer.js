function showTimer() {
    const downDate = new Date('Dec 31, 2022, 00:00:00');

    const daysVal = document.querySelector('.time-count-days .time-count-val');
    const hoursVal = document.querySelector('.time-count-hours .time-count-val');
    const minutesVal = document.querySelector('.time-count-minutes .time-count-val');
    const secondsVal = document.querySelector('.time-count-seconds .time-count-val');

    const daysText = document.querySelector('.time-count-days .time-count-text');
    const hoursText = document.querySelector('.time-count-hours .time-count-text');
    const minutesText = document.querySelector('.time-count-minutes .time-count-text');
    const secondsText = document.querySelector('.time-count-seconds .time-count-text');

    const timeCount = () => {
        let now = new Date();
        let leftUntil = downDate - now;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        const screenWidth = innerWidth;

        if (screenWidth > 780) {
            if ((days< 10) && (days !== 1)) {
                daysVal.textContent = `0${days}`;
                daysText.textContent = `days`;
            } else if (days === 1) {
                daysVal.textContent = `0${days}`;
                daysText.textContent = `day`;
            } else {
                daysVal.textContent = `${days}`;
                daysText.textContent = `days`;
            }

            if ((hours< 10) && (hours !== 1)) {
                hoursVal.textContent = `0${hours}`;
                hoursText.textContent = `hours`;
            } else if (hours === 1) {
                hoursVal.textContent = `0${hours}`;
                hoursText.textContent = `hour`;
            } else {
                hoursVal.textContent = `${hours}`;
                hoursText.textContent = `hours`;
            }

            if ((minutes < 10) && (minutes !== 1)) {
                minutesVal.textContent = `0${minutes}`;
                minutesText.textContent = `minutes`;
            } else if (minutes === 1) {
                minutesVal.textContent = `0${minutes}`;
                minutesText.textContent = `minute`;
            } else {
                minutesVal.textContent = `${minutes}`;
                minutesText.textContent = `minutes`;
            }

            if ((seconds < 10) && (seconds  !== 1)) {
                secondsVal.textContent = `0${seconds}`;
                secondsText.textContent = `seconds`;
            } else if (seconds === 1) {
                secondsVal.textContent = `0${seconds}`;
                secondsText.textContent = `second`;
            } else {
                secondsVal.textContent = `${seconds}`;
                secondsText.textContent = `seconds`;
            }
        } else {
            if ((days< 10) && (days !== 1)) {
                daysVal.textContent = `0${days}`;
                daysText.textContent = `DD`;
            } else if (days === 1) {
                daysVal.textContent = `0${days}`;
                daysText.textContent = `DD`;
            } else {
                daysVal.textContent = `${days}`;
                daysText.textContent = `DD`;
            }

            if ((hours< 10) && (hours !== 1)) {
                hoursVal.textContent = `0${hours}`;
                hoursText.textContent = `HH`;
            } else if (hours === 1) {
                hoursVal.textContent = `0${hours}`;
                hoursText.textContent = `HH`;
            } else {
                hoursVal.textContent = `${hours}`;
                hoursText.textContent = `HH`;
            }

            if ((minutes < 10) && (minutes !== 1)) {
                minutesVal.textContent = `0${minutes}`;
                minutesText.textContent = `MM`;
            } else if (minutes === 1) {
                minutesVal.textContent = `0${minutes}`;
                minutesText.textContent = `MM`;
            } else {
                minutesVal.textContent = `${minutes}`;
                minutesText.textContent = `MM`;
            }

            if ((seconds < 10) && (seconds  !== 1)) {
                secondsVal.textContent = `0${seconds}`;
                secondsText.textContent = `SS`;
            } else if (seconds === 1) {
                secondsVal.textContent = `0${seconds}`;
                secondsText.textContent = `SS`;
            } else {
                secondsVal.textContent = `${seconds}`;
                secondsText.textContent = `SS`;
            }

        }

    };

    timeCount();
    setInterval(timeCount, 1000);
};

export { showTimer };
