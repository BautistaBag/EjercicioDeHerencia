//Con este codigo voy a poder crear una orden la cual va a almacenar una o varias computadoras,
//donde cada computadora tiene sus componentes especificados
//Voy a crear 6 clases, las cuales van a estar relacionadas.
//La clase DispositivoEntrada va a tener dos subclases, las cuales van a heredar sus atributos

class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    toString(){
        return 'Raton: [idRaton: '+this._idRaton+'] '+this._tipoEntrada+' '+this._marca;
    }
}


//Creamos dos ratones y los mostramos por pantalla
let raton1 = new Raton('USB','HP');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooth','Sony');
//Le cambio la marga a raton2 con get marca
raton2.marca = 'Dell';
console.log(raton2.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return ' Teclado: [idTeclado: '+this._idTeclado+'] '+this._tipoEntrada+' '+this._marca;
    }
}

//Creamos dos teclados y los mostramos por pantalla
let teclado1 = new Teclado('Bluetooth','MSI');
console.log(teclado1.toString());

let teclado2 = new Teclado('Bluetooth','Apple');
console.log(teclado2.toString());



class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamanio(){
        return this._tamanio;
    }
    set tamanio(tamanio){
        this._tamanio = tamanio;
    }
toString(){
    return 'Monitor: [idMonitor: '+this._idMonitor+'] Marca: '+this._marca+' Tamaño: '+this._tamanio;
}
}

//Creamos dos monitores y los mostramos por pantalla
let monitor1 = new Monitor('HP', 15);
console.log(monitor1.toString());

let monitor2 = new Monitor('Samsung', 30);
console.log(monitor2.toString());


class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
}
get idComputadora(){
    return this._idComputadora;
}
get nombre(){
    return this._nombre;
}
set nombre(nombre){
    this._nombre = nombre;
}

get monitor(){
    return this._monitor;
}
set monitor(monitor){
    this._monitor = monitor;
}
get teclado(){
    return this._teclado;
}
set teclado(teclado){
    this._teclado = teclado;
}

get raton(){
    return this._raton;
}
set raton(raton){
    this._raton = raton;
}
toString(){
    return this._idComputadora+' '+this._nombre+'\n '+this._monitor+' \n'+this._teclado+'\n '+this._raton;
}

}

//Creamos 2 computadoras y las mostramos por pantalla
let computadora1 = new Computadora('Computadora 2020',monitor1,teclado1,raton1);
console.log(computadora1.toString());

let computadora2 = new Computadora('Computadora 2021',monitor2,teclado2,raton1);
console.log(computadora1.toString());


class Orden{
    static contadorOrdenes = 0;
    constructor(computadora){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = []; 
    }

    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadora.push(computadora);
    }
    mostrarOrden(){
        let computadoraOrden = '';
        for(let computadora of this._computadora){
            computadoraOrden += '\n'+computadora.toString() + '  ';
        }
        console.log('Orden: '+this._idOrden+' Computadoras: '+computadoraOrden);
    }
}

//Creamos un ordenes y las mostramos por pantalla
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();
