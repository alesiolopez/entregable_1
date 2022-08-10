let voto_socio;
let voto_a = 0;
let voto_b = 0;
let voto_nulo = 0;
let cantidad_votos = 0;

alert('Bienvenidos al sistema de votación anónima del Club Pepito JR.')
alert('Hola Socio del Club, por favor siga las indicaciones de entrada.');

//BUCLE CON VOTACIÓN.
while(voto_socio != "SALIR"){
    voto_socio = prompt(`Ingresar A: votar al PARTIDO A.
Ingresar B: votar al PARTIDO B.
Escribir SALIR, para salir del programa.`);
    if(voto_socio == "A" || voto_socio == "a"){
        voto_a++; //Sumo voto de A.
        cantidad_votos++;
        console.log('VOTO CORRECTO');
    } else if(voto_socio == "b" || voto_socio == "B"){
        voto_b++; //Sumo voto de B.
        cantidad_votos++;
        console.log('VOTO CORRECTO');
    } else if(voto_socio == "SALIR"){
        console.log('Saliendo del programa de votación.');
    } else if(voto_socio == ""){
        voto_nulo++; //Sumo voto nulo.
        cantidad_votos++;
            console.log('VOTO NULO. No ingresó opción.');
    } else{
        voto_nulo++; //Sumo voto nulo.
        cantidad_votos++;
        console.log('VOTO NULO. Ingresó la letra:', voto_socio);
        }
        
}

//MOSTRANDO RESULTADOS, SI GANÓ UNO O SI EMPATARON
console.log('RESULTADO:')
if(voto_a > voto_b){
    /* console.log('GANÓ el PARTIDO A con',voto_a,'votos.'); */
    console.log('GANÓ el PARTIDO A con el',((voto_a*100)/cantidad_votos).toFixed(2),'% de los votos. Un total de',voto_a,'votos.')
    console.log('El PARTIDO B pierde con el',((voto_b*100)/cantidad_votos).toFixed(2),'% de los votos. Un total de',voto_b,'votos.');
}else if(voto_a < voto_b){
    /* console.log('GANÓ el PARTIDO B con',voto_b,'votos.'); */
    console.log('GANÓ el PARTIDO B con el',((voto_b*100)/cantidad_votos).toFixed(2),'% de los votos. Un total de',voto_b,'votos.')
    console.log('El PARTIDO A pierde con',((voto_a*100)/cantidad_votos).toFixed(2),'% de los votos. Un total de',voto_a,'votos.');
}else if(voto_a == voto_b && voto_a != 0 && voto_b != 0){
    console.log('Empataron ambos partidos con',voto_a,'votos cada uno.');
}else if(voto_a == 0 && voto_b == 0){
    console.log('No hubo votos. Reiniciar el programa de votación por favor.')
}

//MOSTRANDO VOTACIONES NULAS
if(voto_nulo >0){
    console.log('Hubo un total de',((voto_nulo*100)/cantidad_votos).toFixed(2),'% de votos nulos.');
} else{
    console.log('No hubo votos nulos.')
}

//VOTOS TOTALES:
console.log('Votos TOTALES:', cantidad_votos);