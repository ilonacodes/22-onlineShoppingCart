function Search(products) {
    this.products = products;
    this.filteredProducts = products;
}

Search.prototype.filterByTitle = function (query) {
     this.filteredProducts = this.products.filter(function (product) {
        return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
};