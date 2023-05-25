


const booleanLesson = new Date('May 26, 2023 09:30:00');
console.log(booleanLesson.getDate());
console.log(booleanLesson.getHours());
console.log(booleanLesson.getMinutes());
console.log(booleanLesson.getSeconds());

const myDay = new Date('May 25, 2023 17:30:00');
console.log(myDay.getDate());
console.log(myDay.getHours());
console.log(myDay.getMinutes());
console.log(myDay.getSeconds());

let daysLeft = Math.abs(booleanLesson.getDate() - myDay.getDate() - 1);

console.log(daysLeft);

let hoursLeft = Math.abs(booleanLesson.getHours() - myDay.getHours());

console.log(hoursLeft);

let minutesLeft = Math.abs(booleanLesson.getMinutes() - myDay.getMinutes());

console.log(minutesLeft);

let secondsLeft = Math.abs(booleanLesson.getSeconds() - myDay.getSeconds());

console.log(secondsLeft);

let minutes = 30










    const totalTimeInSeconds = 61000;

    let secondsToShow = 60;

    const clock = setInterval(function(){
        secondsToShow--;
        console.log(secondsToShow);
        document.getElementById("seconds").innerHTML = secondsToShow;
    }, 1000);

    setTimeout(function(){
        clearInterval(clock);
    }, totalTimeInSeconds);

if (secondsToShow === 0 ){

    minutes = minutes - 1;

    document.getElementById("minutes").innerHTML = minutes;
    
} 
