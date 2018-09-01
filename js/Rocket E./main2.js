class Rocket {
    constructor(identificador, propulsores) {
        this.identificador = identificador;
        this.propulsores = [];
        for (var i=0; i < propulsores.length; i++) {
          var prop = new Propulsor(propulsores[i]);
          this.propulsores.push(prop);
        }
      

    }
    info(){
        let velAct = this.propulsores.map(function (propulsor) {
            return propulsor.velocidadActual;
          });
    
       return "Rocket ID:" + " " + this.identificador + " " + " booster max power" + " " + velAct;
    }

    acelerar(){
        for(var i = 0; i < this.propulsores.length; i++){
            if(this.propulsores[i].velocidadActual < this.propulsores[i].potenciaMaxima) {
                this.propulsores[i].velocidadActual+=10;
            }
        }
        return this.info();
    }

    frenar(){
        for(var i = 0; i < this.propulsores.length; i++){
            if(this.propulsores[i].velocidadActual > 0){
            this.propulsores[i].velocidadActual-=10;
          }
        }
        return this.info();
    }
}


class Propulsor {
    constructor(potenciaMaxima) {
        this.potenciaMaxima = potenciaMaxima;
        this.velocidadActual = 0;
    }
}






let rocket1 = new Rocket("32WESSDS",[10, 30, 80]);
let rocket2 = new Rocket("32WESSDS",[ 30, 40, 50, 50, 30, 10]);

function Show_info_rocket1() {   
  let a = document.getElementById("ShowInfo")
  a.innerHTML = rocket1.info();
  console.log("Show1");

}



function Show_info_rocket2() {
  let b =  document.getElementById("ShowInfo2")
  b.innerHTML = rocket2.info();
  console.log("Show2");

}



function acelerate_info_rocket1() {
     let c =  document.getElementById("ShowInfo")
     c.innerHTML = rocket1.acelerar();
     console.log("acelerate1");
}
function acelerate_info_rocket2() {
     let d =  document.getElementById("ShowInfo2")
     d.innerHTML = rocket2.acelerar();
     console.log("acelerate2");
}

function break_info_rocket1() {
     let e =  document.getElementById("ShowInfo")
     e.innerHTML = rocket2.frenar();
     console.log("frenar1");
}
function break_info_rocket2() {
     let f =  document.getElementById("ShowInfo2")
     f.innerHTML = rocket2.frenar();
      console.log("frenar2");
}

// for (i=0; i < 3; i++){
//     rocket1.acelerar();
//     rocket2.acelerar();
// }
//    console.log(rocket1.info());
//     rocket2.info();


// for (i=0; i < 5; i++){
//    rocket1.frenar();
// }
// for (i=0; i < 7; i++){
//     rocket2.acelerar();
// }
//     rocket1.info();
//     rocket2.info();


// for (i=0; i < 15; i++){
//     rocket1.acelerar();
//     rocket2.acelerar();
// }
//     rocket1.info();
//     rocket2.info();



