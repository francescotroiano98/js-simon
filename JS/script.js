const booleanLesson = new Date('May 26, 2023 09:30:00');

const myDay = new Date('May 25, 2023 7:31:00');

let daysLeft = Math.abs(booleanLesson.getDate() - myDay.getDate() - 1);

console.log(daysLeft);

let hoursLeft = Math.abs(booleanLesson.getHours() - myDay.getHours()) % 24; // il modulo di 24 mi garantisce che il valore dei minuti rimanga compreso tra 0 e 23 indipendentemente dalla differenza
console.log(hoursLeft);

let minutesLeft = Math.abs(booleanLesson.getMinutes() - myDay.getMinutes()) % 60; // il modulo di 60 mi garantisce che il valore dei minuti rimanga compreso tra 0 e 59 indipendentemente dalla differenza
console.log(minutesLeft);

let secondsLeft =Math.abs(booleanLesson.getSeconds() - myDay.getSeconds()) % 60; // il modulo di 60 mi garantisce che il valore dei secondi rimanga compreso tra 0 e 59 indipendentemente dalla differenza
console.log(secondsLeft);



document.getElementById("days").innerHTML = daysLeft;

document.getElementById("hours").innerHTML = hoursLeft;

document.getElementById("minutes").innerHTML = minutesLeft;

document.getElementById("seconds").innerHTML = secondsLeft;





    const totalTimeInSeconds = ((daysLeft*24*60*60)+ (hoursLeft * 60*60)+(minutesLeft*60)+(secondsLeft))*1000;

    console.log(totalTimeInSeconds);

    let secondsToShow = secondsLeft;

    let minutesToShow = minutesLeft;

    let hoursToShow = hoursLeft;



    if(secondsToShow === 0){
        secondsToShow = 60;
        minutesToShow--;
    } else if (minutesToShow === 0 && hoursToShow !== 0){
        hoursLeft--;
        minutesToShow = 59;
        
    } else if (minutesToShow && hoursToShow === 0){
        minutesToShow = 0
        
        alert ("IT'S LESSON TIME")
    }
    

    const clock = setInterval(function(){
        secondsToShow--;

        console.log(secondsToShow);

        document.getElementById("seconds").innerHTML = secondsToShow;

        document.getElementById("minutes").innerHTML = minutesToShow;

        document.getElementById("hours").innerHTML = hoursToShow;

        
    }, 1000);

    setTimeout(function(){
        clearInterval(clock);
    }, totalTimeInSeconds);


