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
        // let propulsorMax = this.propulsores.map(function (propulsor) {
        //     return propulsor.potenciaMaxima;
        //   });
        let velAct = this.propulsores.map(function (propulsor) {
            return propulsor.velocidadActual;
          });
       
    }

    acelerar(){
        for(var i = 0; i < this.propulsores.length; i++){
            if(this.propulsores[i].velocidadActual < this.propulsores[i].potenciaMaxima) {
                this.propulsores[i].velocidadActual+=10;
            }
        }
    }

    frenar(){
        for(var i = 0; i < this.propulsores.length; i++){
            if(this.propulsores[i].velocidadActual > 0){
            this.propulsores[i].velocidadActual-=10;
          }
        }
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
  let one = document.getElementById("ShowInfo")
  one.innerHTML = rocket1.info();
 
}

function Show_info_rocket2() {
  let two =  document.getElementById("ShowInfo")
  two.innerHTML = rocket2.info();

}


for (i=0; i < 3; i++){
    rocket1.acelerar();
    rocket2.acelerar();
}
    rocket1.info();
    rocket2.info();


for (i=0; i < 5; i++){
   rocket1.frenar();
}
for (i=0; i < 7; i++){
    rocket2.acelerar();
}
    rocket1.info();
    rocket2.info();


for (i=0; i < 15; i++){
    rocket1.acelerar();
    rocket2.acelerar();
}
    rocket1.info();
    rocket2.info();



