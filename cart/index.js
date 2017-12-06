function formatPrice(price) {
    return '$' + Math.floor(price / 100) + ',' + price % 100;
}

var items = document.querySelector('.items');

var cart = new Cart();

cart.load();

function renderCartProduct(cartProduct) {

    var item = document.createElement('div');
    items.appendChild(item);
    item.classList.add('item');

    var itemTitle = document.createElement('div');
    item.appendChild(itemTitle);
    itemTitle.classList.add('item-title');
    itemTitle.innerText = cartProduct.product.title;

    var itemCount = document.createElement('div');
    item.appendChild(itemCount);
    itemCount.classList.add('item-count');
    itemCount.innerText = cartProduct.count;

    var itemTimes = document.createElement('div');
    item.appendChild(itemTimes);
    itemTimes.classList.add('remove-item');
    itemTimes.innerHTML = '&#x2715;';

    var itemPrice = document.createElement('div');
    item.appendChild(itemPrice);
    itemPrice.classList.add('item-price');
    itemPrice.innerText = formatPrice(cartProduct.product.price);

}

var subTotalElem = document.querySelector('.sub-total-zu');
var taxElem = document.querySelector('.tax-zu');
var totalElem = document.querySelector('.total-zu');
var productCountElem = document.querySelector('#product_count');

function renderCart(cart) {
    subTotalElem.innerText = formatPrice(cart.subTotal());
    taxElem.innerText = formatPrice(cart.tax());
    totalElem.innerText = formatPrice(cart.total());
    productCountElem.innerText = cart.productCount;
}

cart.cartProducts.forEach(function (cartProduct) {
    renderCartProduct(cartProduct);
});

renderCart(cart);

var buttonPayNow = document.querySelector('.pay-now a');
buttonPayNow.addEventListener('click', function (e) {
    alert('This is just a prototype. The payment functionality is still not implemented!');
});





