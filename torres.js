//pilas para manejo de las torres
const pila1= [];
const pila2= [];
const pila3= [];
//variable para cantidad de discos a agregar por nivel
var discos=4;
let t_Origen=null, t_Destino=null;
var valor=null;

//funcion para posicionar las fichas en la primera pila
function f_inicial(){
    for (let i=discos; i>=0; i--){
    pila1.push(i);
    console.log(pila1);
    //valor minimo y maximo

}}

//funcion de torre vacia o no
function torre_Vacia(vacio){
    return vacio.length === 0;
}

//funcion de seleccionado de disco
function seleccion(event){
    var torre = event.target;
    if(t_Origen === null){
        if(!torre_Vacia(torre)){
            t_Origen= torre;
        }
        else{
            console.log("seleccionar torre con discos");
        }
    }
    else if(t_Destino===null){
        if(puedeMoverse(t_Origen, torre)){
            t_Destino=torre;
            moverDisco(t_Origen, t_Destino);
            t_Destino = null;
            t_Origen = null;
        }
    }
    else{
        alert("Movimiento no valido. Elige una torre");
    }
}

//validar si se puede mover la ficha
function puedeMoverse(t_Origen, t_Destino){
    if(t_Origen == t1){
        if(t_Destino==t1){
            alert("Es la misma torre");
        }
        else if (t_Destino == t2){
            if(torre_Vacia(pila2)){
                return true;
            }
            else{
                let top1=pila1[pila1.length-1];
                let top2=pila2[pila2.length-1];
                if (top1 < top2){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        else{
            if(torre_Vacia(pila3)){
                return true;
            }
            else{
                let top1=pila1[pila1.length-1];
                let top2=pila3[pila3.length-1];
                if (top1 < top2){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }
    else if (t_Origen == t2){
        if(t_Destino==t2){
            alert("Es la misma torre");
        }
        else if (t_Destino == t1){
            if(torre_Vacia(pila1)){
                return true;
            }
            else{
                let top1=pila2[pila2.length-1];
                let top2=pila1[pila1.length-1];
                if (top1 < top2){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        else{
            if(torre_Vacia(pila3)){
                return true;
            }
            else{
                let top1=pila2[pila2.length-1];
                let top2=pila3[pila3.length-1];
                if (top1 < top2){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }
    else{
        if(t_Destino==t3){
            alert("Es la misma torre");
        }
        else if (t_Destino == t1){
            if(torre_Vacia(pila1)){
                return true;
            }
            else{
                let top1=pila3[pila3.length-1];
                let top2=pila1[pila1.length-1];
                if(top1 < top2){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        else{
            if(torre_Vacia(pila2)){
                return true;
            }
            else{
                let top1=pila3[pila3.length-1];
                let top2=pila2[pila2.length-1];
                if(top1 < top2){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }
}

//funcion para mover con reglas fichas en las pilas
function moverDisco(t_Origen, t_Destino){
    if(t_Origen == t1){
        if(t_Destino == t2){
            valor=pila1.pop();
            pila2.push(valor); 

            console.log("movido a la t2");

        }
        else {
            valor=pila1.pop();
            pila3.push(valor);
        }

    }
    else if (t_Origen == t2){
        if(t_Destino == t1){
            valor=pila2.pop();
            pila1.push(valor);
        }
        else {
            valor=pila2.pop();
            pila3.push(valor);
        }
    }
    else if (t_Origen == t3){
        if(t_Destino == t1){
            valor=pila3.pop();
            pila1.push(valor);
            console.log("movido a la t1");
        }
        else{
            valor=pila3.pop();
            pila2.push(valor);
        }
    }
}


//--------------------Eventos-----------//

//tomar elementos del grupo de torres
const torres = document.querySelectorAll(".torres");

//recorrer todo los elementos del documento que sean del grupo torre
//para asignarle una función
torres.forEach(function(torre){
    //escuchar evento y activar la funcion seleccion
    torre.addEventListener("click", seleccion);
});