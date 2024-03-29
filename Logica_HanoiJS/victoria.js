import { columna3, discos } from "./torres2.js";
//validar la victoria, todas las fichas en la torre 3
export function victoria_Hanoi(){
    //coger los elementos del contenerdor 
    const elementos = columna3.querySelectorAll('[class*="propiedad"]');
    if(discos == elementos.length){
        document.getElementById("siguiente").style.display = "block";
        document.getElementById("glass").style.display = "block";
        document.getElementById("confirmar").style.display = "none";
    }
    else{
        alert("Sigue intentando");
    }
}