//constantes para determinar torre de origen y destino
let t_Origen = null;
let t_Destino = null;
class Torres {
    constructor(nombre){
        this.nombre = nombre;
        // arreglo para almacenar los discos
        this.discos = [];
    }

    // --------------metodos------------
    // si la torre esta vacia
    torre_Vacia(){
        console.log("Esta vacia la torre");
        return this.discos.length === 0;
    }
    // ultimo valor de la torre
    ver_Top(){
        return this.discos[this.discos.length-1];
    }
    // si se puede mover la ficha - validador
    puede_Moverse(t_Origen,t_Destino){
        //si la torre esta vacia
        if (t_Origen === t_Destino) {
            console.log("Es la misma torre");
            return false;
        }
        // valores a comparar
        let top1 = null;
        let top2 = null;
        // operador instanceof para poder aplicar el metodo ver_Top
        // estando los objetos creados fuera de la clase 
        if (this instanceof Torre_A) {
            top1 = this.ver_Top();
        } else if (this instanceof Torre_B) {
            top1 = this.ver_Top();
        } else if (this instanceof Torre_C) {
            top1 = this.ver_Top();
        }
        // signar valores para comparar
        if (t_Destino.torre_Vacia()) {
            return true;
        } else {
            if (t_Origen === Torre_A) {
                top1 = this.ver_Top();
            } else if (t_Origen === Torre_B) {
                top1 = this.ver_Top();
            } else if (t_Origen === Torre_C) {
                top1 = this.ver_Top();
            }

            if (t_Destino instanceof Torre_B) {
                top2 = t_Destino.ver_Top();
            } else if (t_Destino instanceof Torre_C) {
                top2 = t_Destino.ver_Top();
            }
            // determinar el resultado booleano
            return top1 < top2;
        }
    }
    // movimiento de fichas 
    mover_Disco(t_Origen, t_Destino) {
        let valor = null;
    
        if (t_Origen === Torre_A) {
            if (t_Destino === Torre_B) {
                valor = t_Origen.discos.pop();
                t_Destino.discos.push(valor);
                console.log("Movido de Torre_A a Torre_B");
            } else if (t_Destino === Torre_C) {
                valor = t_Origen.discos.pop();
                t_Destino.discos.push(valor);
                console.log("Movido de Torre_A a Torre_C");
            }
        } else if (t_Origen === Torre_B) {
            if (t_Destino === Torre_A) {
                valor = t_Origen.discos.pop();
                t_Destino.discos.push(valor);
                console.log("Movido de Torre_B a Torre_A");
            } else if (t_Destino === Torre_C) {
                valor = t_Origen.discos.pop();
                t_Destino.discos.push(valor);
                console.log("Movido de Torre_B a Torre_C");
            }
        } else if (t_Origen === Torre_C) {
            if (t_Destino === Torre_A) {
                valor = t_Origen.discos.pop();
                t_Destino.discos.push(valor);
                console.log("Movido de Torre_C a Torre_A");
            } else if (t_Destino === Torre_B) {
                valor = t_Origen.discos.pop();
                t_Destino.discos.push(valor);
                console.log("Movido de Torre_C a Torre_B");
            }
        }
    }    
}