// elementos del html 
document.getElementById("t1").addEventListener("click", elemento);
document.getElementById("t2").addEventListener("click", elemento);
document.getElementById("t3").addEventListener("click", elemento);

// pilas o torres
const pila1 = [];
const pila2 = [];
const pila3 = [];

// variables
let discos = 4; //determinar discos en el juego
var t_Origen = null, t_Destino = null;//torres que juega
var on_Fase2 = false; //determinar si puede pasar a la segunda fase
var vacio_Off = null; //determinar si la torre esta vacia
// --------------------funciones----------------

//funcion para posicionar las fichas en la primera pila
function f_inicial(){
    // se busca que se llene de manera inversa empezando con las ficha 4
    for (let i=discos; i>=0; i--){
    pila1.push(i);
    // PINTAR EN PANTALLA
    //console.log(pila1);
}}

function torre_Vacia(id){
//determina si la torre esta vacia o no y retorna un booleano
    switch(id){
        //returnara un true cuando este es 
        case 't1':
            return console.log(pila1.length === 0);
        case 't2':
            return console.log(pila2.length === 0);
        case 't3':
            return console.log(pila3.length === 0);
        default:
            return alert("!Fallo en torre!");
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
            torre_Vacia(id);
            if(!vacio_Off){
                console.log("La torre no tiene elementos para mover")
            }
            t_Origen = pila1.pop();
        }
        else if(id == 't2'){
            console.log("torre 2 "+ pila2);
            torre_Vacia(id);
        }
        else{
            console.log("torre 3 "+ pila3);
            torre_Vacia(id);
        } 
    }
    //procesar segunda fase, logica del juego
    else{

    }



    
}



// función inicial de juego
f_inicial();
// función de elemento cuando el jugador oprime los botones