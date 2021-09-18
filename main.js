var days = document.querySelector('#days');
var hrs = document.querySelector('#hrs');
var mins = document.querySelector('#mins');
var secs = document.querySelector('#secs');

var radius = days.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = `${circumference}`;

const arr = [days, hrs, mins, secs]
const deadline = new Date(year=2021, month=8, date=30)

for (let i = 0; i < 4; i++) {
    arr[i].style.strokeDasharray = `${circumference} ${circumference}`;
    arr[i].style.strokeDashoffset = `${circumference}`;
}

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    for (let i = 0; i < 4; i++) {
        arr[i].style.strokeDashoffset = offset;
    }
}

const M2D = 1000 * 60 * 60 * 24;



setProgress();