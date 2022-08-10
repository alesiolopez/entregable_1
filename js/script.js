let voto_socio = "";
let voto_a = 0;
let voto_b = 0;
let voto_nulo = 0;
let cantidad_votos = 0;

alert('Bienvenidos al sistema de votación Pepito JR.')
console.log('Hola Socio del Club, por favor siga las indicaciones de entrada.');

//BUCLE CON VOTACIÓN.
while(voto_socio != "SALIR"){
    voto_socio = prompt('Para votar al PARTIDO A ingresar A. Para votar al PARTIDO B ingresar B. Para salir, escribir SALIR')
    if(voto_socio == "A" || voto_socio == "a"){
        voto_a++; //Sumo voto.
        cantidad_votos++;
        console.log('YA VOTÓ');
    } else if(voto_socio == "b" || voto_socio == "B"){
        voto_b++; //Sumo voto.
        cantidad_votos++;
        console.log('YA VOTÓ');
    } else if(voto_socio == "SALIR"){
        console.log('Saliendo del programa de votación.');
    } else{
        voto_nulo++; //Sumo voto.
        cantidad_votos++;
        console.log('YA VOTÓ');
    }
}

//MOSTRANDO RESULTADOS, SI GANÓ UNO O SI EMPATARON
console.log('RESULTADO:')
if(voto_a > voto_b){
    /* console.log('GANÓ el PARTIDO A con',voto_a,'votos.'); */
    console.log('GANÓ el PARTIDO A con el',((voto_a*100)/cantidad_votos).toFixed(2),'% de votos.')
    console.log('El PARTIDO B pierde con el',((voto_b*100)/cantidad_votos).toFixed(2),'% de votos.');
}else if(voto_a < voto_b){
    /* console.log('GANÓ el PARTIDO B con',voto_b,'votos.'); */
    console.log('GANÓ el PARTIDO B con el',((voto_b*100)/cantidad_votos).toFixed(2),'% de votos.')
    console.log('El PARTIDO A pierde con',((voto_a*100)/cantidad_votos).toFixed(2),'% de votos.');
}else{
    console.log('Empataron ambos partidos con',voto_a,'votos cada uno.');
}

//MOSTRANDO VOTACIONES NULAS
console.log('Hubo un total de',((voto_nulo*100)/cantidad_votos).toFixed(2),'% de votos nulos.');

//VOTOS TOTALES:
console.log('Votos TOTALES:', cantidad_votos);