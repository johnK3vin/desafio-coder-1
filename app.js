class Product {
    static counterProduct = 0;

    constructor(title, description, price, thumbnail, code, stock){
        this._id = ++Product.counterProduct;
        this._title = title;
        this._description = description;
        this._price = price;
        this._thumbnail = thumbnail;
        this._code = code;
        this._stock = stock;
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }
    set title(title){
        this._title = title;
    }

    get description(){
        return this._description;
    }
    set description(description){
        this._description = description;
    }

    get price(){
        return this._price;
    }
    set price(price){
        this._price = price;
    }

    get thumbnail(){
        return this._thumbnail;
    }
    set thumbnail(thumbnail){
        this._thumbnail = thumbnail;
    }

    get code(){
        return  this._code;
    }

    get stock(){
        return this._stock;
    }
    set stock(stock){
        this._stock = stock;
    }
}

class ProductManager{
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const codeRepeat = this.products.find((product) => product.code === code);
        if(codeRepeat){
            throw new Error(`Ya existe un producto con el mismo codigo`);
        }

        const product = new Product(title, description, price, thumbnail, code, stock);
        this.products.push(product);
        return product;
    }

    getProduct(){
        return this.products;
    }

    getProdcutById(id){
        const searchId = this.products.find((items) => items.id === id || items._title === id);
        if(searchId){
            console.log(searchId);
        } else{
            throw new Error('No se encuentra ningun producto con ese Id');
        }
    }
}

const product = new ProductManager();

console.log(product.getProduct())

//code iguales para marcar error

/*
product.addProduct('lenovo', 'audifonos inalambricos', 200, 'lenovo.png', 'abc123', 20)
product.addProduct('camisa', 'comoda y elegante', 30, 'camisa.png','abc123' , 20)
*/

product.addProduct('pantalon', 'comodo para el baile', 30, 'pantalon.png', 'abc145', 30)
product.addProduct('chaqueta', 'lo mejor para invierno', 50, 'chaqueta.png', 'abc321', 10)
product.addProduct('zapatillas', 'las mas rapida', 100, 'zapatillas.png', 'abc321', 20)

console.log(product.getProduct())


//getProductId busca la id y tambien el nombre, pero el nombre si o si tiene que estar como string si no no funcionara xd
console.log(product.getProdcutById(2))
console.log(product.getProdcutById('pantalon'))
