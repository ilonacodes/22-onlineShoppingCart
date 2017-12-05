function Cart() {
    this.productCount = 0;
}

Cart.prototype.add = function (product) {
    this.productCount++;
};