import shopsData from '../shop.json';

const shopsContainer = document.querySelector('.shops');
const goodsContainer = document.querySelector('.goods');

shopsData.forEach(function (shop) {
  const shopElement = document.createElement('div');
  shopElement.textContent = shop.shop;
  shopElement.classList.add('shop-item');
  shopsContainer.appendChild(shopElement);

  shopElement.addEventListener('click', function () {
    renderProducts(shop.products);
    highlightShop(shopElement);
  });
});

function renderProducts(products) {
  goodsContainer.innerHTML = '';

  products.forEach(function (product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productElement.appendChild(productImage);

    const productName = document.createElement('div');
    productName.textContent = product.name;
    productElement.appendChild(productName);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.classList.add('add-to-cart');
    productElement.appendChild(addButton);

    goodsContainer.appendChild(productElement);
  });
}

function highlightShop(shopElement) {
  const shopItems = document.querySelectorAll('.shop-item');

  shopItems.forEach(function (item) {
    item.classList.remove('active');
  });

  shopElement.classList.add('active');
}
