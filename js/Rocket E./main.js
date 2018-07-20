class Rocket {
    constructor(identificador, propulsores) {
      this.identificador = identificador;
      this.propulsores = propulsores;
    }
    // Mostrar las características del coete y propulsores
    caracteristicas(){
    	document.write(`  ${this.identificador } : ${this.propulsores }  <br> ` )
    }
    velocidadActual(previousValue,currentValue){
      return previousValue + currentValue;
    }
  // Método acelerar
      acelerar(){
      for(var i = 0; i < this.propulsores.length; i++){
         this.propulsores[i]+=10;
      }
    }
  // Método Frenar
     frenar(){
      for(var i = 0; i < this.propulsores.length; i++){
         this.propulsores[i]-=10;
      }
    }
}
// Crear los objetos 
var rocket1 = new Rocket("32WESSDS",[10, 30, 80]);
var rocket2 = new Rocket("LDSFJA32",[30, 40, 50, 50, 30, 10]);
// Mostrar objeto en pantalla
    rocket1.caracteristicas();
    rocket2.caracteristicas();
    // Suma de potencias 
    var resultado1 = rocket1.propulsores.reduce(rocket1.velocidadActual);
    var resultado2 = rocket2.propulsores.reduce(rocket2.velocidadActual);
    document.write(`Velocidad actual Rocket1:  ${resultado1}  <br>  Velocidad actual Rocket2:  ${resultado2} ` )
    document.write('<br> Potencia 0 <br>')
    rocket1.caracteristicas();
    rocket2.caracteristicas();
    document.write(`Velocidad actual Rocket1:  ${resultado1}  <br>  Velocidad actual Rocket2:  ${resultado2} ` )
document.write('<br> Acelerando coetes 3 veces <br>')
    for (i=1; i < 3; i++){
    console.log(rocket1.acelerar());
    console.log(rocket2.acelerar());
    }
    rocket1.acelerar();
    rocket1.velocidadActual();
    rocket2.acelerar();
    rocket2.velocidadActual();
    var resultado1 = rocket1.propulsores.reduce(rocket1.velocidadActual);
    var resultado2 = rocket2.propulsores.reduce(rocket2.velocidadActual);
    document.write(`Velocidad actual Rocket1:  ${resultado1}  <br>  Velocidad actual Rocket2:  ${resultado2} ` );
document.write('<br> Frenar coete 32WESSDS 5 veces y Acelerar coete LDSFJA32 7 veces <br>')
    for (i=1; i < 5; i++){
    console.log(rocket1.frenar());
    }
    rocket1.frenar();
    rocket1.velocidadActual();
    for (i=1; i < 7; i++){
    console.log(rocket2.acelerar());
    }
    rocket2.acelerar();
    rocket2.velocidadActual();
    var resultado1 = rocket1.propulsores.reduce(rocket1.velocidadActual);
    var resultado2 = rocket2.propulsores.reduce(rocket2.velocidadActual);
document.write(`Velocidad actual Rocket1:  ${resultado1}  <br>  Velocidad actual Rocket2:  ${resultado2} ` );
document.write('<br> Acelerando coetes 15 veces <br>')
    for (i=1; i < 15; i++){
      console.log(rocket1.acelerar());
      console.log(rocket2.acelerar());
    }
    rocket1.acelerar();
    rocket1.velocidadActual();
    rocket2.acelerar();
    rocket2.velocidadActual();
    var resultado1 = rocket1.propulsores.reduce(rocket1.velocidadActual);
    var resultado2 = rocket2.propulsores.reduce(rocket2.velocidadActual);
document.write(`Velocidad actual Rocket1:  ${resultado1}  <br>  Velocidad actual Rocket2:  ${resultado2} ` );
