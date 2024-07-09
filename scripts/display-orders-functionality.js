addProductHTML_OrderPage();

console.log(placedOrders);

function addProductHTML_OrderPage() {

  let ordersSectionHTML = '';

  if(placedOrders.length <= 0) {

    ordersSectionElement.innerHTML = '';

    ordersSectionHTML = `

      <div class="css-heading-container">

        <p>Your Orders</p>

      </div>

      <div class="css-order-details">

        <div class="css-order-info">

          <div class="order-placed-date">

            <p>Order Placed:</p>
            NA

          </div>

          <div class="order-total">

            <p>Total:</p>
            NA

          </div>

          <div class="order-id">

            <p>Order ID:</p>
            NA

          </div>

        </div>

        <div class="css-order-list">

          <div class="no-orders-yet">

            No Orders placed yet. Please check the store.

          </div>

        </div>

      </div>`;

      ordersSectionElement.insertAdjacentHTML("beforeend", ordersSectionHTML);

    console.log('No products in placedOrders.');

  } else {

    ordersSectionElement.innerHTML = `
  
        <div class="css-heading-container">
  
          <p>Your Orders</p>
  
        </div>`;

    placedOrders.forEach((placedItem, placedOrderIndex) => {

      ordersSectionHTML = `
  
        <div class="css-order-details">
  
          <div class="css-order-info">
  
            <div class="order-placed-date">
  
              <p>Order Placed:</p>
              ${placedItem.orderPlacedOn}
  
            </div>
  
            <div class="order-total">
  
              <p>Total:</p>
              $${(placedItem.orderTotal/100).toFixed(2)}
  
            </div>
  
            <div class="order-id">
  
              <p>Order ID:</p>
              ${placedItem.orderID}
  
            </div>
  
          </div>
    
          <div class="css-order-list-${placedOrderIndex} css-order-list">`;
          
          ordersSectionElement.insertAdjacentHTML("beforeend", ordersSectionHTML);

          placedItem.orderList.forEach((placedOrdersProduct, placedOrdersIndex) => {

            ordersSectionHTML = `
        
                  <div class="product-${placedOrdersIndex} product">
        
                    <div class="product-image-${placedOrdersIndex} product-image">
        
                      <img class = "product-img" src="${placedOrdersProduct.image}">
        
                    </div>
        
                    <div class="info-and-buy-again">
        
                      <p class="order-title">${placedOrdersProduct.name}</p>
                      <p class="order-arrives-on">Arriving on: ${placedOrdersProduct.deliveryDate}</p>
                      <p class="order-quantity">Quantity: ${placedOrdersProduct.quantity}</p>
        
                      <button class="buy-again-product-${placedOrderIndex}-${placedOrdersIndex} buy-again">
                        <img src="images/buy-again.png" alt="buy-again">Buy it again
                      </button>
        
                    </div>
        
                    <div class="track-package-div">
        
                      <button class = 'track-package-button-${placedOrderIndex}-${placedOrdersIndex} track-package-button'>
                        Track package
                      </button>
        
                    </div>
        
                  </div>`;

                document.querySelector(`.css-order-list-${placedOrderIndex}`).insertAdjacentHTML("beforeend", ordersSectionHTML);
            
            let tempBuyAgainButton = document.querySelector(`.buy-again-product-${placedOrderIndex}-${placedOrdersIndex}`);
            let tempTrackPackageButton = document.querySelector(`.track-package-button-${placedOrderIndex}-${placedOrdersIndex}`);

            tempBuyAgainButton.addEventListener('click', () => {
      
              cart.push(placedOrdersProduct);
              cartItemCountElement.innerHTML = cart.length;
              console.log(cart);
              console.log(placedOrders);
      
              localStorage.setItem('cartLS', JSON.stringify(cart));
      
            });

            tempTrackPackageButton.addEventListener('click', () => {
              
              orderToTrack = [];
              orderToTrack.push(placedOrdersProduct);
              localStorage.setItem('orderToTrackLS', JSON.stringify(orderToTrack));
              window.location.href = 'tracking-page.html';

            });

          });

      ordersSectionHTML = `
    
            </div>`;
      ordersSectionElement.insertAdjacentHTML("beforeend", ordersSectionHTML);
      
    });

    ordersSectionHTML = `

      </div>`;
  
    ordersSectionElement.insertAdjacentHTML("beforeend", ordersSectionHTML);

  }

}