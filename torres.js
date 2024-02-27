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
    // se busca que se llene de manera inversa empezando con las ficha 4
    for (let i=discos; i>=0; i--){
    pila1.push(i);
    console.log(pila1);
    //valor minimo y maximo

}}

//funcion de torre vacia o no
function torre_Vacia(vacio){
    console.log("Esta vacio");
    return vacio.length === 0;
}

//funcion de seleccionado de disco
function seleccion(event){
    var torre = event.target;
    if(t_Origen === null){
        if(!torre_Vacia(torre)){
            t_Origen= torre;
            console.log("torre seleccionada");
        }
        else{
            console.log("seleccionar torre con discos");
        }
    }
    else if(t_Destino===null){
        if(puedeMoverse(t_Origen, torre)){
            t_Destino=torre;
            console.log("segunda torre seleccionada");
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
            return false;   
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
        else if(t_Destino == t3){
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
            return false;
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
        else if (t_Destino == t3){
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
            return false;
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
        else if (t_Destino == t2){
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

            console.log("movido a la t2 de t1");

        }
        else if(t_Destino == t3){
            valor=pila1.pop();
            pila3.push(valor);
            console.log("movido a la t3 de t1");
        }

    }
    else if (t_Origen == t2){
        if(t_Destino == t1){
            valor=pila2.pop();
            pila1.push(valor);
            console.log("movido a la t1 de t2");
        }
        else if(t_Destino == t3){
            valor=pila2.pop();
            pila3.push(valor);
            console.log("movido a la t3 de t2")
        }
    }
    else if (t_Origen == t3){
        if(t_Destino == t1){
            valor=pila3.pop();
            pila1.push(valor);
            console.log("movido a la t1 de t3");
        }
        else if (t_Destino == t2){
            valor=pila3.pop();
            pila2.push(valor);
            console.log("movido a la t2 de t3");
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

// -----------mover discos eventos-------//

var torre1 = document.querySelector("columna1");
var torre2 = document.querySelector("columna2");
var torre3 = document.querySelector("columna3");

var botonT1 = document.getElementById("t1");
var botonT2 = document.getElementById("t2");
var botonT3 = document.getElementById("t3");
// se ejecuta la función para se llena la pila con las fichas
f_inicial();

botonT1.addEventListener("click", function(){
    var disco = torre1.lastElementChild;
    torre2.appendChild(disco);
});