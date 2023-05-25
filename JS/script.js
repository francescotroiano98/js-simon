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

let hoursLeft = Math.floor((booleanLesson - myDay) / (1000 * 60 * 60)) % 24; // il modulo di 24 mi garantisce che il valore dei minuti rimanga compreso tra 0 e 23 indipendentemente dalla differenza
console.log(hoursLeft);

let minutesLeft = Math.floor((booleanLesson - myDay) / (1000 * 60)) % 60; // il modulo di 60 mi garantisce che il valore dei minuti rimanga compreso tra 0 e 59 indipendentemente dalla differenza
console.log(minutesLeft);

let secondsLeft = Math.floor((booleanLesson - myDay) / 1000) % 60; // il modulo di 60 mi garantisce che il valore dei secondi rimanga compreso tra 0 e 59 indipendentemente dalla differenza
console.log(secondsLeft);



document.getElementById("days").innerHTML = daysLeft;

document.getElementById("hours").innerHTML = hoursLeft;

document.getElementById("minutes").innerHTML = minutesLeft;

document.getElementById("seconds").innerHTML = secondsLeft;






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
