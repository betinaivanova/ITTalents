function Shop(name,address,broiProdukti) {
    this.name = name;
    this.address = address;
    this.money = 0.0;
    this.products = [];
    // this.products = new Array(broiProdukti);
    // this.freePlaces = broiProdukti;
}
function Fantastiko(name,address,broiProdukti) {
    Shop.call(this, name, address,broiProdukti); 
}

Fantastiko.prototype = Object.create(Shop.prototype);
Fantastiko.prototype.constructor = Fantastiko; 

function Billa(name,address,broiProdukti) {
    Shop.call(this, name, address,broiProdukti); 
}

Billa.prototype = Object.create(Shop.prototype);
Billa.prototype.constructor = Billa; 
Shop.prototype.addProduct = function(product) {
    this.products.push(product);
    // var index = this.products.length - this.freePlaces;
    // this.products[index] = product;
    // this.freePlaces--;
}
function Product(name,price) {
    this.name = name;
    this.price = price;
}
function ProductNaKilogram(name,price,nalichnost) {
    Product.call(this, name, price); 
    this.nalichnost = nalichnost;
}

ProductNaKilogram.prototype = Object.create(Product.prototype);
ProductNaKilogram.prototype.constructor = ProductNaKilogram; 

function ProductNaBroi(name,price,nalichnost) {
    Product.call(this,name,price);
    this.nalichnost = nalichnost;
}
ProductNaBroi.prototype = Object.create(Product.prototype);
ProductNaBroi.prototype.constructor = ProductNaBroi;
function Kupuvach(magazin,money,maxProducts) {
    this.magazin = magazin;
    this.money = money;
    this.maxProducts = maxProducts;
    this.kolichka = [];
}
Kupuvach.prototype.addProduct = function(product,kolichestvo) {
    for(var index = 0; index < this.magazin.products.length; index++) {
        if(this.magazin.products[index].name == product.name && this.magazin.products[index].nalichnost >= kolichestvo) {
            this.kolichka.push(product.name);
            this.magazin.products[index].nalichnost -= kolichestvo;
            this.magazin.money += product.price * kolichestvo;
            this.money -= product.price * kolichestvo;
        } else {
            console.log("Produktyt e izcherpan!");
        }
    }
}

var fantastiko = new Fantastiko('fantastiko','centar',10);
var billa = new Billa('billa','lozenec',20);
var meso = new ProductNaKilogram('meso',5,10.0);
var sirene = new ProductNaKilogram('sirene',4,5.0);
var riba = new ProductNaKilogram('riba',20,8.0);
var bira = new ProductNaBroi('bira',2.50,100);
var kniga = new ProductNaBroi('kniga',15,5);
var ivan = new Kupuvach(billa,200,5);
var maria = new Kupuvach(fantastiko,50,20);
fantastiko.addProduct(meso);
fantastiko.addProduct(bira);
fantastiko.addProduct(kniga);
billa.addProduct(riba);
console.log(ivan.money);
ivan.addProduct(riba,5);
console.log(ivan.money);
