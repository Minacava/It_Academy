// FASE1

// Crear Array
var nombre = ["M","A","R","I","N","A"];
var a = new Map();
var apellido = ["C","A","M","A","C","H","O"];


// // Bucle para recorrer el array
nombre.forEach(function(i) {
    console.log(i);
});

// // FASE2

    var vocales = ["A","E","I","O","U"];

    for(i= 0; nombre.length>i; i++){
    //Comprobar si es un número
        if(isNaN(nombre[i]) == false ){
            console.log(nombre[i] + " " + " Els noms de persones no contenen números!")
    // No es numero comprobar consunantes/vocale
        }else if(vocales.indexOf(nombre[i]) == -1){
            console.log(nombre[i] + " " + "‘CONSONTANT’");
        }else {
            console.log(nombre[i] + " "+ "VOCAL");
        }
        // // // FASE3
    //Almacenar letras en array
        if(a.has(nombre[i]) == false){
            a.set(nombre[i],1);
        }else{
    //Comprobar si existe la llave, en ese caso sumar 1
            var valor = a.get(nombre[i]);
            a.set(nombre[i],valor + 1);
        }
    }

console.log(a);


 // // // // FASE4
var myFullName = [];
myFullName.push(...nombre,...apellido);

console.log(myFullName);