
class Rocket {
    constructor(identificador, propulsores) {
        this.identificador = identificador;
        this.propulsores = propulsores;
    }
    info(){
        // let propulsorMax = this.propulsores.map(function (propulsor) {
        //     return propulsor.potenciaMaxima;
        //   });
        let velAct = this.propulsores.map(function (propulsor) {
            return propulsor.velocidadActual;
          });
        document.write(`${this.identificador} : ${ velAct} </br>`) 
    }
    acelerar(){
        for(var i = 0; i < this.propulsores.length; i++){      
            if(this.propulsores[i].velocidadActual < this.propulsores[i].potenciaMaxima){
                this.propulsores[i].velocidadActual+=10;
            }   
        }
    }
    frenar(){
        for(var i = 0; i < this.propulsores.length; i++){
            if(this.propulsores[i].velocidadActual >0)
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


rocket1.info();
rocket2.info();
document.write("PRIMERO")

for (i=0; i < 3; i++){
    rocket1.acelerar();
    rocket2.acelerar();
}
    rocket1.info();
    rocket2.info();
document.write("SEGUNDO ")

for (i=0; i < 5; i++){
   rocket1.frenar();
}
for (i=0; i < 7; i++){
    rocket2.acelerar();
}
    rocket1.info();
    rocket2.info();
document.write("TERCERO")

for (i=0; i < 15; i++){
    rocket1.acelerar();
    rocket2.acelerar();
}
    rocket1.info();
    rocket2.info();