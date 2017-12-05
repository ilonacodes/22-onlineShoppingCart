var products = [
    new Product(1, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(2, 'Office Table', 'https://static.pexels.com/photos/416320/pexels-photo-416320.jpeg', 18999),
    new Product(3, 'Office Calculator', 'https://static.pexels.com/photos/163032/office-pen-calculator-computation-163032.jpeg', 1295),
    new Product(4, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(5, 'Office Calculator', 'https://static.pexels.com/photos/163032/office-pen-calculator-computation-163032.jpeg', 1295),
    new Product(6, 'Office Table', 'https://static.pexels.com/photos/416320/pexels-photo-416320.jpeg', 18999),
    new Product(7, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(8, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(9, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(10, 'Office Table', 'https://static.pexels.com/photos/416320/pexels-photo-416320.jpeg', 18999),
    new Product(11, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(12, 'Office Calculator', 'https://static.pexels.com/photos/163032/office-pen-calculator-computation-163032.jpeg', 1295),
    new Product(13, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(14, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(15, 'Office Table', 'https://static.pexels.com/photos/416320/pexels-photo-416320.jpeg', 18999),
    new Product(16, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(17, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(18, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(19, 'Office Calculator', 'https://static.pexels.com/photos/163032/office-pen-calculator-computation-163032.jpeg', 1295),
    new Product(20, 'Office Chair', 'https://static.pexels.com/photos/115747/pexels-photo-115747.jpeg', 12999),
    new Product(21, 'Office Table', 'https://static.pexels.com/photos/416320/pexels-photo-416320.jpeg', 18999)

];

var cart = new Cart();

var search = new Search(products);

var searchInput = document.querySelector('#search input');

function onSearchInputUpdated() {
    search.filterByTitle(searchInput.value);
    renderProducts();
}

searchInput.addEventListener('change', onSearchInputUpdated);
searchInput.addEventListener('keyup', onSearchInputUpdated);

var productsElem = document.querySelector('.products');

function renderProduct(product) {
    var productElem = document.createElement('div');
    productsElem.appendChild(productElem);
    productElem.classList.add('product');

    var productImageContainer = document.createElement('div');
    productElem.appendChild(productImageContainer);
    productImageContainer.classList.add('product-img');

    var productImage = document.createElement('img');
    productImageContainer.appendChild(productImage);
    productImage.setAttribute('src', product.image);

    var productTitle = document.createElement('div');
    productElem.appendChild(productTitle);
    productTitle.classList.add('product-title');
    productTitle.innerText = product.title;

    var productPrice = document.createElement('div');
    productElem.appendChild(productPrice);
    productPrice.classList.add('product-price');
    productPrice.innerText = '$' + Math.floor(product.price / 100);

    var productPriceCoins = document.createElement('span');
    productPrice.appendChild(productPriceCoins);
    productPriceCoins.innerText = product.price % 100;

    var productButtons = document.createElement('div');
    productElem.appendChild(productButtons);
    productButtons.classList.add('buttons');

    var productAddToCart = document.createElement('a');
    productButtons.appendChild(productAddToCart);
    productAddToCart.classList.add('add-to-cart');
    productAddToCart.innerText = 'Add+';

    productAddToCart.addEventListener('click', function () {
        cart.add(product);
        renderCart(cart);
    });

    var productBuyNowButton = document.createElement('a');
    productButtons.appendChild(productBuyNowButton);
    productBuyNowButton.classList.add('buy-now');
    productBuyNowButton.innerText = 'Buy Now';

    productBuyNowButton.addEventListener('click', function () {
        cart.add(product);
        renderCart(cart);
        alert('This feature is still under development. Your product was added to the cart, though ;)');
    })
}

function renderCart(cart) {
    var countElem = document.querySelector('#product_count');
    countElem.innerText = cart.productCount;
}

function renderProducts() {
    productsElem.innerHTML = '';

    search.filteredProducts.forEach(function (product) {
        renderProduct(product);
    });
}

renderProducts();
renderCart(cart);






