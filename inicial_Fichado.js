import { columna1 } from "./torres2.js";
export function asignarClasesAFichas() {
const fichas = columna1.querySelectorAll('.disco');

fichas.forEach(ficha => {
    // Comprobar si el elemento tiene la clase 'disco'
    if (ficha.classList.contains('disco')) {
    // Obtener el ID del elemento
    const id = ficha.getAttribute('id');
    //determina el nivel
    switch(determinar_Nivel(ficha)){
        case 1:
            //asignar propiedades
            break;
        case 2:
            //asignar propiedades
            break;
        case 3:
            //asignar propiedades
            break;
        case 4:
            //asignar propiedades
            break;
        case 5:
            //asignar propiedades
            break;
    }
    // Agregar clases específicas de acuerdo al ID

    }
});
}
//determina el nivel para la asignación de propiedades
function determinar_Nivel(ficha){
    if(ficha.classList.contains('disco_Nvl2')){
        return 2;
    }
    else if(ficha.classList.contains('disco_Nvl3')){
        return 3;
    }
    else if (ficha.classList.contains('disco_Nvl4')){
        return 4;
    }
    else if(ficha.classList.contains('disco_Nvl5')){
        return 5;
    }
    else{
        console.log("nivel 1");
        return 1;
    }
}

function sacar_ID(){
    switch (id) {
        case '1':
            ficha.classList.add('proiedad1', 'claseComun');
            break;
        case '2':
            ficha.classList.add('proiedad2', 'claseComun');
            break;
        case '3':
            ficha.classList.add('proiedad3', 'claseComun');
            break;
        case '4':
            ficha.classList.add('proiedad4', 'claseComun');
            break;
        case '5':
            ficha.classList.add('proiedad5', 'claseComun');
            break;
        case '6':
            ficha.classList.add('proiedad6', 'claseComun');
            break;
        case '7':
            ficha.classList.add('proiedad7', 'claseComun');
            break;
        case '8':
            ficha.classList.add('proiedad8', 'claseComun');
            break;
        default:
            alert("fallo de propiedades");
    }
}