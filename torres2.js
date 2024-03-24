//animación import
//import {animacion_Torre as animacion } from './animacion';
// elementos del html 
const torre1=document.getElementById("t1").addEventListener("click", elemento);
const torre2=document.getElementById("t2").addEventListener("click", elemento);
const torre3=document.getElementById("t3").addEventListener("click", elemento);
//elementos html de fichas
const f1 = document.getElementById("ficha1")
const f2 = document.getElementById("ficha2")
const f3 = document.getElementById("ficha3")
const f4 = document.getElementById("ficha4")
//fichas
var fichas = [f1,f2,f3,f4];

// pilas o torres
const pila1 = [];
const pila2 = [];
const pila3 = [];

// variables
let discos = 4; //determinar discos en el juego
var t_Origen = null, t_Destino = null;//torres que juega
var on_Fase2 = false; //determinar si puede pasar a la segunda fase
var torre_Igual= null; //permite para saber si selecciona la misma torre
var recuperacion = null;//recuperar dato
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
        return true;
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
        return false;
    }
}
//ejecución de mov
function movimiento(id){
    if(id == 't1'){
        pila1.push(t_Origen)
        // animacion(id);
    }
    else if(id == 't2'){
        pila2.push(t_Origen)
    }
    else{
        pila3.push(t_Origen)
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
                // torre1.removeChild(ficha1);
                recuperacion = id;
                on_Fase2 = true;

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
                // torre2.removeChild(ficha1);
                recuperacion = id;
                on_Fase2 = true;

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
                // torre3.removeChild(ficha1);
                recuperacion = id;
                on_Fase2 = true;

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
        else{//seleccion de las segunda torre evitando que sea la misma
            var vacio = torre_Vacia(id);
            if(!vacio){
                switch(id){
                    case 't1':
                        t_Destino=pila1[pila1.length -1];
                        confirmacion(t_Origen, t_Destino, id, recuperacion);
                        // torre1.appendChild(ficha1);

                        pintado();
                        break;
                    case 't2':
                        t_Destino=pila2[pila2.length -1];
                        confirmacion(t_Origen, t_Destino, id, recuperacion);
                        // torre2.appendChild(ficha1);

                        pintado();
                        break;
                    case 't3':
                        t_Destino=pila3[pila3.length -1];
                        confirmacion(t_Origen, t_Destino, id, recuperacion);
                        // torre3.appendChild(ficha1);

                        pintado();
                        break
                    default:
                        alert('torre no seleccionada');
                }
            }
            else{
                movimiento(id);

                pintado();
            }
            on_Fase2 = false;
        }
    }   
}

function pintado(){
    console.log('pila 1: '+pila1+'\npila 2:'+pila2+'\npila 3: '+pila3);
}


// función inicial de juego
f_inicial();
// función de elemento cuando el jugador oprime los botones