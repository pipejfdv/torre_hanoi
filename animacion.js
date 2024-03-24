import { columna1, columna2, columna3, pila1, pila2, pila3 } from "./torres2.js";
//variable para modificación css
let top_Actual = 180;
//creara el elemento en el contenedor 1
export function crear_Elemento(valor){
    const ficha = document.createElement('div');
    
    //contenido a mostrar
    ficha.textContent = valor;
    //asignando atributos
    ficha.setAttribute('class','disco translate-middle');
    ficha.setAttribute('id',valor);
    return ficha;
}
//crear varios discos 
export function discos_Multiples(discos){
    for(let i=1; i<=discos; i++){
        const nueva_Ficha = crear_Elemento(i);
        columna1.append(nueva_Ficha);
    }
}
//borrado de discos para no sobrescribir
export function borrarDiscos() {
    pila3.length=0;
    pila1.length=0;
    pila2.length=0;
    const discos = document.querySelectorAll('.disco');
  
    // Si hay discos en el DOM
    if (discos.length) {
      discos.forEach(disco => disco.remove());
    }
    //restado de pixels
    top_Actual = top_Actual - 20;
    //establecer valor para el nuevo div
    document.styleSheets[0].rules[0].style.top = top_Actual + 'px';
  }