function Programa(){
    alert("A continuación, elegir una de las siguientes opciones. Clic en 'Aceptar'.")
    let opcion = prompt("1) Sumar. 2) Restar. 3) Multiplicar. 4) Dividir.")

if(opcion == 1){
        let num1 = parseInt(prompt("Ingresar primer número."));
        let num2 = parseInt(prompt("Ingresar segundo número"));
        let suma = num1+num2;
        alert("Resultado: " + num1 + " + " + num2 + " = " + suma);
        alert("¡Gracias por utilizar el programa! =)")
    }else if(opcion == 2){
        let num1 = parseInt(prompt("Ingresar primer número."));
        let num2 = parseInt(prompt("Ingresar segundo número"));
        let resta = num1 - num2;
        alert("Resta: " + num1 + " - " + num2 + " = " + resta);
        alert("¡Gracias por utilizar el programa! =)")
    }else if(opcion == 3){
        let num1 = parseInt(prompt("Ingresar primer número."));
        let num2 = parseInt(prompt("Ingresar segundo número"));
        let multiplicar = num1 * num2;
        alert("Multiplicación: " + num1 + " x " + num2 + " = " + multiplicar);
        alert("¡Gracias por utilizar el programa! =)")
    }else if(opcion == 4){
        let num1 = parseInt(prompt("Ingresar primer número."));
        let num2 = parseInt(prompt("Ingresar segundo número"));
        let dividir = num1/num2;
        alert("División: " + num1 + " / " + num2 + " = " + dividir);
        alert("¡Gracias por utilizar el programa! =)")
    } else {
        alert("Opción no encontrada, reintentar. ;-)");
    }
}