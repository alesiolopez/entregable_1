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
}