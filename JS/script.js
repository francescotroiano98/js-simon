const totalTimeInSeconds = 60000;

let secondsToShow = 60;

const clock = setInterval(function(){
    secondsToShow--;
    console.log(secondsToShow);
    document.getElementById("seconds").innerHTML = secondsToShow;
}, 1000);

setTimeout(function(){
    clearInterval(clock);
}, totalTimeInSeconds);