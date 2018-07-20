// Fase 1

// let rocket1 = new Rocket("32WESSDS",[0, 0, 0]);
// let rocket2 = new Rocket("LDSFJA32",[0, 0, 0, 0, 0, 0]);

// rocket1.info();
// rocket2.info();

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
        document.write(`${this.identificador}: ${propulsorMax}:${velAct} </br>`) 
    }
    acelerar(){
        for(var i = 0; i < this.propulsores.length; i++){
            this.propulsores[i].velocitatActual+=10;
        }
    }
    frenar(){
        for(var i = 0; i < this.propulsores.length; i++){
            this.propulsores[i].velocitatActual-=10;
        }
    }

    
    
       
    }
 


class Propulsor {
    constructor(potenciaMaxima) {
        this.potenciaMaxima = potenciaMaxima;
        this.velocitatActual = 0;
    }
}
let rocket1 = new Rocket("32WESSDS",[new Propulsor(10),new Propulsor(30), new Propulsor(80)]);
let rocket2 = new Rocket("LDSFJA32",[new Propulsor(30), new Propulsor(40), new Propulsor(50), new Propulsor(50), new Propulsor(30), new Propulsor(10)]);


rocket1.acelerar();
rocket1.info();
rocket2.acelerar();
rocket2.info();

rocket2.frenar();
rocket2.info();



