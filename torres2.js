//importaciones
import { niveles } from "./niveles.js";
import { discos_Multiples, borrarDiscos, cambio_Contenedor } from "./animacion.js";
import { victoria_Hanoi } from "./victoria.js";
// elementos del html 
document.getElementById("t1").addEventListener("click", elemento);
document.getElementById("t2").addEventListener("click", elemento);
document.getElementById("t3").addEventListener("click", elemento);
//contenedores de torres
export const columna1 = document.querySelector('.columna1');
export const columna2 = document.querySelector('.columna2');
export const columna3 = document.querySelector('.columna3');
//siguiente nivel boton
document.getElementById("siguiente").addEventListener("click", orden);
//confirmar si pasa de nivel
document.getElementById("confirmar").addEventListener("click", victoria_Hanoi);
//div que muestra el contenido
const contenido_Movimiento = document.getElementById("movimientos");
// pilas o torres - se exportan para borrado
export const pila1 = [];
export const pila2 = [];
export const pila3 = [];

// variables
export let discos = niveles(); //determinar discos en el juego
var t_Origen = null, t_Destino = null;//torres que juega
var on_Fase2 = false; //determinar si puede pasar a la segunda fase
var torre_Igual= null; //permite para saber si selecciona la misma torre
var recuperacion = null;//recuperar dato
export var A_Origen = null, A_Destino = null; //determinar a que columnas del contenedor se va mover la animación
var movimiento_Usuario = 0;
// --------------------funciones----------------

//funcion para posicionar las fichas en la primera pila
function f_inicial(){
    // se busca que se llene de manera inversa empezando con las ficha 4
    for (let i=discos; i>=1; i--){
    pila1.push(i);
    // PINTAR EN PANTALLA
    //console.log(pila1);
}}

function torre_Vacia(id){
//determina si la torre esta vacia o no y retorna un booleano
    switch(id){
        //returnara un true cuando este es 
        case 't1':
            console.log(pila1.length === 0);
            return pila1.length === 0;
        case 't2':
            console.log(pila2.length === 0);
            return pila2.length === 0;
        case 't3':
            console.log(pila3.length === 0);
            return pila3.length === 0;
        default:
            return alert("!Fallo en torre!");
    }
}

//función que permite validar si el movimiento es posible o no
function confirmacion(t_Origen, t_Destino, id, recuperacion){
    if(t_Origen < t_Destino){
        movimiento(id);
        //determinar el destino de la animación
        if(id == 't1'){
            A_Destino = columna1;
        }
        else if(id == 't2'){
            A_Destino = columna2;
        }
        else{
            A_Destino = columna3;
        }
        cambio_Contenedor(A_Origen, A_Destino);
    }
    else{
        alert('la ficha es más grande de la que esta en la base');
        switch(recuperacion){
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
}
//ejecución de mov
function movimiento(id){
    if(id == 't1'){
        pila1.push(t_Origen);
        movimiento_Usuario = movimiento_Usuario + 1;
        actualizacion_Movimiento();
    }
    else if(id == 't2'){
        pila2.push(t_Origen);
        movimiento_Usuario = movimiento_Usuario + 1;
        actualizacion_Movimiento();
    }
    else{
        pila3.push(t_Origen);
        movimiento_Usuario = movimiento_Usuario + 1;
        actualizacion_Movimiento();
    }
}

function elemento(event){
// la función se encarga de escoger la pila con la propiedad event.target
    var id = event.target.id;
    //se ejecutara siempre y cuando la torre 1 no este seleccionada
    if(!on_Fase2){
        //determinar cual fue la primera torre seleccionada
        if(id == 't1'){
            console.log(id+"torre 1 "+ pila1);
            //determinar torre si tiene elementos o no            
            var vacio = torre_Vacia(id);
            if(!vacio){
                
                torre_Igual = 't1';
                t_Origen = pila1.pop();
                recuperacion = id;
                on_Fase2 = true;
                A_Origen = columna1;

                pintado();
            }
            else{
                alert("la torre seleccionada no tiene elementos para moverse");

                pintado();
            }
        }
        else if(id == 't2'){
            console.log("torre 2 "+ pila2);//muestra info de la torre            
            var vacio = torre_Vacia(id);
            if(!vacio){
                
                torre_Igual = 't2';
                t_Origen = pila2.pop();
                recuperacion = id;
                on_Fase2 = true;
                A_Origen = columna2;

                pintado();
            }
            else{
                alert("la torre seleccionada no tiene elementos para moverse");

                pintado();
            }
        }
        else{
            console.log("torre 3 "+ pila3);            
            var vacio = torre_Vacia(id);
            if(!vacio){
                
                torre_Igual = 't3';
                t_Origen = pila3.pop();
                recuperacion = id;
                on_Fase2 = true;
                A_Origen = columna3;

                pintado();
            }
            else{
                alert("la torre seleccionada no tiene elementos para moverse");

                pintado();
            }
        } 
    }
    //procesar segunda fase, logica del juego
    else{
        if(id == torre_Igual){//se usa para descartar si el usuario selecciono la misma torre
            alert("seleccionaste la misma torre");
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

            on_Fase2 = false;
            
            pintado();
        }
        else{//seleccion de las SEGUNDA torre evitando que sea la misma
            var vacio = torre_Vacia(id);
            if(!vacio){
                switch(id){
                    case 't1':
                        t_Destino=pila1[pila1.length -1];
                        confirmacion(t_Origen, t_Destino, id, recuperacion);

                        pintado();
                        break;
                    case 't2':
                        t_Destino=pila2[pila2.length -1];
                        confirmacion(t_Origen, t_Destino, id, recuperacion);

                        pintado();
                        break;
                    case 't3':
                        t_Destino=pila3[pila3.length -1];
                        confirmacion(t_Origen, t_Destino, id, recuperacion);

                        pintado();
                        break
                    default:
                        alert('torre no seleccionada');
                }
            }
            else{
                movimiento(id);
                if(id == 't1'){
                    A_Destino = columna1;
                    cambio_Contenedor(A_Origen, A_Destino);
                }
                else if(id == 't2'){
                    A_Destino = columna2;
                    cambio_Contenedor(A_Origen, A_Destino);
                }
                else if(id == 't3'){
                    A_Destino = columna3;
                    cambio_Contenedor(A_Origen, A_Destino);
                }
                else{
                    alert("fallo en la torre vacia");
                }

                pintado();
            }
            on_Fase2 = false;
        }
    }   
}

function pintado(){
    console.log('pila 1: '+pila1+'\npila 2:'+pila2+'\npila 3: '+pila3);
}
//pintado de movimientos para el jugador
export function actualizacion_Movimiento() {
    contenido_Movimiento.innerHTML = "<strong>Tus movimientos:" + movimiento_Usuario + "</strong>";
}
    
//ejecución para los siguientes niveles
function orden(){
    discos = niveles();
    borrarDiscos();
    f_inicial();
    discos_Multiples(discos);
    document.getElementById("siguiente").style.display = "none";
    document.getElementById("glass").style.display = "none";
    document.getElementById("confirmar").style.display = "block";
    movimiento_Usuario = 0;
}
// función de evento para determinar si gana, se ejecuta de manera constante

// función inicial de juego
f_inicial();
//pintado de los primeros discos
discos_Multiples(discos);