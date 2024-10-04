// per deg
const deg = 6;  // 360 deg in a round / 60 min,sec =6

//getting hands of clock from html
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

//function to update cleck after every 1 millisecond
setInterval(() => {
    let day = new Date();    // current time

    //calculating rotation angles
    let ms = day.getMilliseconds() * deg;   //fractional movement of sec hand
    let hh = day.getHours() * 30;    // 360/12hrs=30
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg + ms / 1000;

    //updating clock hands
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1);
