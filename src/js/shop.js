fetch('/shop.json')
  .then(response => response.json())
  .then(data => {
    const shopsContainer = document.querySelector('.shops');
    const shopItems = []; 

    data.forEach(function (shop) {
      const shopElement = document.createElement('div');
      shopElement.textContent = shop.shop;
      shopElement.classList.add('shop-item');
      shopsContainer.appendChild(shopElement);

      shopElement.addEventListener('click', function () {
        renderProducts(shop.products);
        highlightShop(shopElement); 
      });

      shopItems.push(shopElement); 
    });

    function renderProducts(products) {
      const goodsContainer = document.querySelector('.goods');
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
      // Remove the 'active' class from all shop elements
      shopItems.forEach(function (item) {
        item.classList.remove('active');
      });

      // Add the 'active' class to the clicked shop element
      shopElement.classList.add('active');
    }
  })
  .catch(error => {
    console.error('Ошибка загрузки файла JSON:', error);
  });
