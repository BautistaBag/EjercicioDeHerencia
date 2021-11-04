class Orden{
    static contadorOrden = 0;
   // static contadorProductosAgregados = 0;


    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(productos){
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden; 
    }
    
    agregarProductos(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
        this._productos.push(producto);
 //Si quiero saber cuántos valores agregué a mi arreglo de producto, hago lo siguiente:
       // this._productos[this._contadorProductosAgregados++] = producto;
    }else{
        console.log('No se pueden agregar mas productos');
    }
}
    calcularTotal(){
let totalVentas = 0;
//con el siguiente for voy a iterar en el arreglo productos
        for(let producto of this._productos){
            totalVentas += producto.precio;
        }
        return totalVentas;
    }
    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += '\n'+producto.toString() + '  ';
        }
        console.log("Orden : "+ this._idOrden +". Total: $" + this.calcularTotal() +". Productos: " + productoOrden  )
    }
    
}

class Producto{
   
    static contadorProductos = 0;


    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return this._idProducto+ ' ' + this._nombre+ ' ' + this._precio;
    }
}

let producto1 = new Producto('Remera',200);
let producto2 = new Producto('Zapatillas',100);
console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.mostrarOrden();
