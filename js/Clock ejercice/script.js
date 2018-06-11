const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
  //  Hora actual segun to hora local
  var date = new Date();
  console.log(date);

  //  Dar la hora, minuto, segundo exacto 
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hours: "+ hr + " Minutes: "+ min + " Seconds: "+ sec );


  let hrPosition = (hr*360/12)+(min*(360/60)/12);
  let minPosition = (min*360/60) + (sec*(360/60)/60);
  let secPosition= sec* 360/60;
// Crear la rotacioón automatica 

function runTheClock(){
        hrPosition = hrPosition+(30/360);
        minPosition = minPosition+(6/60);
        secPosition = secPosition +6;
      
        // Crear la rotación
        HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
        MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
        SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock,1000);


