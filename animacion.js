export function animacion_Torre(id){
    torre2.appendChild(ficha1);
    torre1.removeChild(ficha1);
    switch(id){
        case 't1':
            pila1.push(t_Origen);
            break;
        case 't2':
            pila2.push(t_Origen);
            break;
        case 't3':
            pila3.push(t_Origen);
            break;
    }
}
