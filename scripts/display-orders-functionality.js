addProductHTML_OrderPage();

function addProductHTML_OrderPage() {

  if(cart.length <= 0) {

    console.log('No products in cart.');

  } else {

    let cartTotal = 0;

    cart.forEach((cartProduct, cartIndex) => {

      cartTotal += cartProduct.price;

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
              <p class="order-arrives-on">Arriving on: June 24</p>
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

    });

  }

}