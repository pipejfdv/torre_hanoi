//seleccionar nivel
let nivel = 0;
export function niveles(){
    nivel = nivel + 1;
    switch(nivel){
        case 1:
            return 4;
        case 2:
            return 5;
        case 3:
            return 6;
        case 4:
            return 7;
        case 5:
            return 8;
        default:
            return alert("FIN DEL JUEGO");
    }
}