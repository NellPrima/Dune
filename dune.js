const countdown = () => {
    const countDate = new Date("October 24, 2021 11:55:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

  // if(gap < 1000){
   // changeBg();
  // }
};

setInterval(countdown, 1000);

function changeBg(){
    const images = [
        'url("img1.jpg")',
        'url("img2.jpg")',
        'url("img4.jpg")',
    ]

    const section = document.querySelector('.coming_soon');
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
};

setInterval(changeBg, 60000);


