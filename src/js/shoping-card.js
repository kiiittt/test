function renderCartItems() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';

  // Получаем товары из локального хранилища
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Рендерим каждый товар в корзине
  cartItems.forEach(function (item) {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    const productImage = document.createElement('img');
    productImage.src = item.image;
    productImage.classList.add('product-image');
    cartItemElement.appendChild(productImage);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productName = document.createElement('div');
    productName.textContent = item.name;
    productName.classList.add('product-name');
    productInfo.appendChild(productName);

const productPrice = document.createElement('div');
productPrice.textContent = 'Price: ' + item.price;
productPrice.classList.add('product-price');
productInfo.appendChild(productPrice);



    const quantityLabel = document.createElement('label');
    quantityLabel.classList.add('quantity-label');
    productInfo.appendChild(quantityLabel);

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = item.quantity || 1;
    quantityInput.min = 1;
    quantityInput.classList.add('quantity-input');
    quantityInput.addEventListener('change', function () {
      updateCartItemQuantity(item, quantityInput.value);
    });
    productInfo.appendChild(quantityInput);

    cartItemElement.appendChild(productInfo);
    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Функция для обновления количества товара в корзине
function updateCartItemQuantity(item, quantity) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Находим товар в корзине по имени
  const cartItem = cartItems.find(function (cartItem) {
    return cartItem.name === item.name;
  });

  // Обновляем количество товара
  if (cartItem) {
    cartItem.quantity = parseInt(quantity);
  }

  // Обновляем корзину в локальном хранилище
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Перерисовываем товары в корзине
  renderCartItems();
}

// Вызов функции для рендеринга товаров в корзине
renderCartItems();
