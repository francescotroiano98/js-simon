const booleanLesson = new Date('May 26, 2023 09:00:00');



const myDay = new Date('May 25, 2023 17:59:50');




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






    const totalTimeInSeconds = ((daysLeft*24*60*60)+ (hoursLeft * 60*60)+(minutesLeft*60)+(secondsLeft))*1000;

    console.log(totalTimeInSeconds);

    let secondsToShow = secondsLeft;

    let minutesToShow = minutesLeft;

    let hoursToShow = hoursLeft;



    

    const clock = setInterval(function() {

        if (secondsToShow > 0) {

          secondsToShow--;

        } else {

          secondsToShow = 59;

          if (minutesToShow > 0) {
            
            minutesToShow--;

          } else {

            minutesToShow = 59;

            if (hoursToShow > 0) {

              hoursToShow--;

            } else {

              clearInterval(clock);

              alert("IT'S LESSON TIME");
              
              return;
            }
          }
        }
        document.getElementById("seconds").innerHTML = secondsToShow;

        document.getElementById("minutes").innerHTML = minutesToShow;

        document.getElementById("hours").innerHTML = hoursToShow;

    }, 1000);

    setTimeout(function(){

        clearInterval(clock);

    }, totalTimeInSeconds);


