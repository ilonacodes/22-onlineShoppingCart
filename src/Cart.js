function Cart() {
    this.productCount = 0;
    this.cartProducts = [];
}

Cart.prototype.add = function (product) {
    this.productCount++;

    var foundCartProduct = this.cartProducts
        .find(function (cartProduct) {
            return cartProduct.product === product;
        });

    if (foundCartProduct) {
        foundCartProduct.count++;
    } else {
        this.cartProducts.push(new CartProduct(
            product,
            1
        ));
    }

    this.save();
};

Cart.prototype.subTotal = function () {
    var subTotal = 0;

    this.cartProducts.forEach(function (cartProduct) {
        subTotal += cartProduct.product.price * cartProduct.count;
    });

    return subTotal;
};

Cart.prototype.tax = function () {
    return Math.floor(this.subTotal() * 0.19);
};

Cart.prototype.total = function () {
    return this.subTotal() + this.tax();
};

Cart.prototype.save = function () {
    localStorage.setItem('cart', JSON.stringify({
        productCount: this.productCount,
        cartProducts: this.cartProducts
    }));
};

Cart.prototype.load = function () {
    var data = localStorage.getItem('cart');
    var parsed = JSON.parse(data);

    if (parsed) {
        this.productCount = parsed.productCount;
        this.cartProducts = parsed.cartProducts;
    }
};


function CartProduct(product, count) {
    this.product = product;
    this.count = count;
}