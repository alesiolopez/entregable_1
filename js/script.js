function Programa(){
    alert("Ejecutando programa.")
    let accion = prompt("Dime qué hacer: Saltar, Correr o Comer.");
    let repeticion = prompt("Ingresar la cantidad de veces que quiere realizar la acción. Entre 1 y 10.")

    if(repeticion > 0 && repeticion <= 10){
        if(repeticion <= 5){
            for (let i = 0; i < repeticion; i++) {
                alert(accion + ". Cantidad de veces: " + (i+1) + " de " + repeticion);
            }
        } else if(repeticion <= 10){
            for (let i = 0; i < repeticion; i++) {
                alert("Súper " + accion + "!. Cantidad de veces: " + (i+1) + " de " + repeticion);
            }
        } 
    }else{
        alert("Ingresa la cantidad entre 1 y 10. Vuelve a intentar rey.");
    }

    let edad = prompt("Ingresa ahora tu edad para saber en qué etapa estas.");

    if(edad >= 0 && edad <= 5){
        alert("Estas en la etapa de Primera Infancia");
    } else if (edad >= 6 && edad <= 11){
        alert("Estas en la etapa de Infancia");
    } else if(edad >= 12 && edad < 18){
        alert("Estas en la etapa de Adolescencia");
    } else if(edad >= 18 && edad <= 26){
        alert("Estas en la etapa de Juventud");
    } else if(edad >= 27 && edad <= 59){
        alert("Estas en la etapa de Adultez");
    }else if(edad >= 60){
        alert("Estas en la etapa de Persona Mayor");
    }
alert("Gracas por utilizar le programa rey.")
}
