function Product(productType,name,price) {
    this.productType = productType;
    this.name = name;
    this.price = price;
}

function ShoppingCart() {
    this.products = [];
}
ShoppingCart.prototype.add = function(product) {
    this.products.push(product);
    return this;
}

ShoppingCart.prototype.remove = function(product) {

}

ShoppingCart.prototype.showCost = function() {

}

ShoppingCart.prototype.showProductTypes = function() {

}

ShoppingCart.prototype.getInfo = function() {

}
var sladko1 = new Product("Sweets", "Shokolad Milka", 2);
var kolichka1 = new ShoppingCart();
kolichka1.add(sladko1).add(sladko1);

console.log(ShoppingCart);
