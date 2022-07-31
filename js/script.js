function Programa(){
    let num = prompt("Ingresar un numero");
    let palabra = prompt("Ingresar palabra para repetir");

    for (let i = 0; i < num; i++) {
    alert("Palabra que se va a repetir: " + palabra + ". La cantidad de veces " + (i + 1) + "/" + num);
    }

    alert("Programa terminado.");
}