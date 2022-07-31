function Programa(){
    alert("A continuación, elegir una de las siguientes opciones. Clic en 'Aceptar'.")
    let opcion = prompt("1) Sumar. 2) Restar. 3) Multiplicar. 4) Dividir.")

    if(opcion == 1){
        let num1 = parseInt(prompt("Ingresar primer número."));
        let num2 = parseInt(prompt("Ingresar segundo número"));
        let suma = num1+num2;
        alert("La suma de " + num1 + " y " + num2 + " es de: " + suma + ".");
    }else if(opcion == 2){
        let num1 = parseInt(prompt("Ingresar primer número."));
        let num2 = parseInt(prompt("Ingresar segundo número"));
        let resta = num1 - num2;
        alert("La resta entre " + num1 + " y " + num2 + " es de: " + resta + ".");
    }else if(opcion == 3){
        let num1 = parseInt(prompt("Ingresar primer número."));
        let num2 = parseInt(prompt("Ingresar segundo número"));
        let multiplicar = num1 * num2;
        alert("La multiplicación entre " + num1 + " y " + num2 + " es de: " + multiplicar + ".");
    }else if(opcion == 4){
        let num1 = parseInt(prompt("Ingresar primer número."));
        let num2 = parseInt(prompt("Ingresar segundo número"));
        let dividir = num1/num2;
        alert("La división entre " + num1 + " y " + num2 + " es de: " + dividir + ".");
    } else {
        alert("Opción no encontrada");
    }
}