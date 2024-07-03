addProductHTML_OrderPage();

console.log(cart);

function addProductHTML_OrderPage() {

  if(cart.length <= 0) {

    ordersListElement.innerHTML = '';

    let ordersHTML = `

          <div class="no-orders-yet">

            No Orders made yet. Please check the store.

          </div>`;

    ordersListElement.insertAdjacentHTML("beforeend", ordersHTML);

    console.log('No products in cart.');

  } else {

    let cartTotal = 0;
  
    let cartItemCount = 0;

    ordersListElement.innerHTML = '';

    cart.forEach((cartProduct, cartIndex) => {

      cartTotal += cartProduct.price * cartProduct.quantity;

      orderTotalPriceElement.innerHTML = `

            <p>Total:</p>
            $${(cartTotal/100).toFixed(2)}`;

      let ordersHTML = `

          <div class="product-${cartIndex} product">

            <div class="product-image-${cartIndex} product-image">

              <img class = "product-img" src="${cartProduct.image}">

            </div>

            <div class="info-and-buy-again">

              <p class="order-title">${cartProduct.name}</p>
              <p class="order-arrives-on">Arriving on: ${cartProduct.orderPlacedOn}</p>
              <p class="order-quantity">Quantity: ${cartProduct.quantity}</p>

              <button class="buy-again-product-${cartIndex} buy-again">
                <img src="images/buy-again.png" alt="buy-again">Buy it again
              </button>

            </div>

            <div class="track-button-div">

              <button>
                Track package
              </button>

            </div>

          </div>`;

      ordersListElement.insertAdjacentHTML("beforeend", ordersHTML);
      
      let tempBuyAgainButton = document.querySelector(`.buy-again-product-${cartIndex}`);

      tempBuyAgainButton.addEventListener('click', () => {

        cart[cartIndex].quantity++;
        ordersListElement.innerHTML = '';
        addProductHTML_OrderPage();
        console.log(cart);

        localStorage.setItem('cartLS', JSON.stringify(cart));

      });
      
      if(cartProduct.quantity > 0) {
  
        cartItemCount += parseInt(cartProduct.quantity);

      }
  
      if(cartItemCount <= 9) {
  
        cartItemCountElement.innerHTML = cartItemCount;
  
      } else {
  
        cartItemCountElement.innerHTML = '9+';
        cartItemCountElement.classList.add('cartItemCountMoreThan9');
  
      }

    });

  }

}