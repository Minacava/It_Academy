
class Rocket {
    constructor(identificador, propulsores) {
        this.identificador = identificador;
        this.propulsores = propulsores;
    }
    info(){
        let propulsorMax = this.propulsores.map(function (propulsor) {
            return propulsor.potenciaMaxima;
          });
        let velAct = this.propulsores.map(function (propulsor) {
            return propulsor.velocitatActual;
          });
        document.write(`${this.identificador}:${propulsorMax}:  ${velAct} </br>`) 
    }
    acelerar(){
        for(var i = 0; i < this.propulsores.length; i++){      
            if(this.propulsores[i].velocidadActual === this.propulsores[i].potenciaMaxima){
                return this.propulsores[i].velocidadActual;
            }else{
                this.propulsores[i].velocidadActual+=10;
            }
           
        }
    }
    frenar(){
        for(var i = 0; i < this.propulsores.length; i++){
            
            this.propulsores[i].velocidadActual-=10;
        }
    }    
}
class Propulsor {
    constructor(potenciaMaxima) {
        this.potenciaMaxima = potenciaMaxima;
        this.velocidadActual = 0;
    }
}
let rocket1 = new Rocket("32WESSDS",[new Propulsor(10),new Propulsor(30), new Propulsor(80)]);
let rocket2 = new Rocket("LDSFJA32",[new Propulsor(30), new Propulsor(40), new Propulsor(50), new Propulsor(50), new Propulsor(30), new Propulsor(10)]);



for (i=0; i < 6; i++){
    console.log(rocket1.acelerar());
    console.log(rocket2.acelerar());
}
    rocket1.info();
    rocket2.info();
// for (i=0; i < 5; i++){
//     console.log(rocket1.frenar());
// }
// for (i=0; i < 7; i++){
//     console.log(rocket2.acelerar());
// }
//     rocket1.info();
//     rocket2.info();
//  for (i=0; i < 15; i++){
//     console.log(rocket1.acelerar());
//     console.log(rocket2.acelerar());
// }
//     rocket1.info();
//     rocket2.info();