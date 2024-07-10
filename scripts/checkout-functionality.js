addProductHTML_CheckoutPage();

console.log(cart);

function addProductHTML_CheckoutPage() {

  checkoutListElement.innerHTML = '';

  if(cart.length > 0) {

    let itemTotalCostNoShipAndNoTax = 0;
    let itemTotalShippingCost = 0;
    let itemTotalCostBeforeTax = 0;
    let itemTax = 0;
    let checkoutTotalCost = 0;

    checkoutItemCountElement.innerHTML = `Checkout (${cart.length} items)`;

    cart.forEach((cartItem, cartIndex) => {
  
      let checkoutItemHTML = '';

      itemTotalCostNoShipAndNoTax += cartItem.price * cartItem.quantity;

      itemTotalShippingCost += cartItem.deliveryCost;

      itemTotalCostBeforeTax = itemTotalCostNoShipAndNoTax + itemTotalShippingCost;

      itemTax = Math.round(itemTotalCostBeforeTax * 0.1);

      checkoutTotalCost = itemTotalCostBeforeTax + itemTax;
    
      checkoutSummary.innerHTML = `
    
          <p class="checkout-summary-header">Order Summary</p>
  
          <div class="checkout-summary-item-count">
  
            <div>Items (${cart.length}):</div>
  
            <div class="cost">$${(itemTotalCostNoShipAndNoTax/100).toFixed(2)}</div>
  
          </div>
  
          <div class="checkout-summary-shipping-cost">
  
            <div>Shipping & handling:</div>
  
            <div class="cost">$${(itemTotalShippingCost/100).toFixed(2)}</div>
  
          </div>
  
          <div class="checkout-summary-total-before-tax">
  
            <div>Total before tax:</div>
  
            <div class="cost">$${(itemTotalCostBeforeTax/100).toFixed(2)}</div>
  
          </div>
  
          <div class="checkout-summary-tax-cost">
  
            <div>Estimated tax (10%):</div>
  
            <div class="cost">$${(itemTax/100).toFixed(2)}</div>
  
          </div>
          
  
          <div class="checkout-summary-order-total">
  
            <div>Order total:</div>
  
            <div class="cost">$${(checkoutTotalCost/100).toFixed(2)}</div>
  
          </div>
  
          <div class="checkout-summary-use-paypal">
  
            <div>Use PayPal</div>
  
            <input class = "checkout-pay-with-paypal" type="checkbox">
  
          </div>
  
          <button class="checkout-place-order-button">Place your order</button>
      
      `;

      document.querySelector(`.checkout-place-order-button`).addEventListener('click', () => {
        placedOrders.push({
          orderID : '0f6dc0f3-ad1f-5c72-8892-826deea97d6f',
          orderPlacedOnUnformated : new Date(),
          orderPlacedOn : formatDate(new Date(), "", "long", "numeric"),
          orderTotal : checkoutTotalCost,
          orderList : cart
        });

        localStorage.setItem('placedOrdersLS', JSON.stringify(placedOrders));

        cart = [];
        localStorage.setItem('cartLS', JSON.stringify(cart));

        window.location.href = 'orders-page.html';

        console.log(cart);
        console.log(placedOrders);

      });
  
      checkoutItemHTML = `
    
          <div class="cheakout-product-${cartIndex} cheakout-product">
    
            <p class="cheakout-product-${cartIndex}-delivery-date cheakout-product-delivery-date">Delivery date: Tuesday, July 2</p>
    
            <div class="checkout-product-${cartIndex}-information checkout-product-information">
    
              <img src="${cartItem.image}" alt="product-${cartIndex}">
    
              <div class="checkout-product-${cartIndex}-main-info checkout-product-main-info">
    
                <p class="cheakout-product-${cartIndex}-title cheakout-product-title">${cartItem.name}</p>
                <p class="cheakout-product-${cartIndex}-price cheakout-product-price">$${(cartItem.price/100).toFixed(2)}</p>
                <label class="cheakout-product-${cartIndex}-quantity cheakout-product-quantity">Quantity: ${cartItem.quantity} 
                  <p class = "cheakout-product-${cartIndex}-quantity-update cheakout-product-quantity-update">Update</p>
                  <p class = "cheakout-product-${cartIndex}-quantity-delete cheakout-product-quantity-delete">Delete</p>
                </label>
    
              </div>
    
              <div class="checkout-product-${cartIndex}-delivery checkout-product-delivery">
      
                <p style="font-weight: bold; margin: 0px 0px 10px 1px;">Choose a delivery option:</p>
                <div class="checkout-product-${cartIndex}-delivery-option1 checkout-product-delivery-option">
      
                  <div>
    
                    <label style="display: flex; flex-direction: row; align-items: center;">
    
                      <input type="radio" class="checkout-product-${cartIndex}-delivery-radio-option1" name = "checkout-product-${cartIndex}">
                      <div style="display: inline-block;">
    
                        <p style="color: green; font-weight: 500; margin: 0px 0px 3px 0px;">${formatDate(updateDate(cartItem.orderPlacedOnUnformated, '+', 'days', 9), 'long', 'long', 'numeric')}</p>
                        <p style="color: rgb(116, 116, 116); font-size: 15px;">FREE Shipping</p>
    
                      </div>
    
                    </label>
    
                  </div>
      
                </div>
                <div class="checkout-product-${cartIndex}-delivery-option2 checkout-product-delivery-option">
      
                  <div>
    
                    <label style="display: flex; flex-direction: row; align-items: center;">
    
                      <input type="radio" class="checkout-product-${cartIndex}-delivery-radio-option2" name = "checkout-product-${cartIndex}">
                      <div style="display: inline-block;">
    
                        <p style="color: green; font-weight: 500; margin: 0px 0px 3px 0px;">${formatDate(updateDate(cartItem.orderPlacedOnUnformated, '+', 'days', 3), 'long', 'long', 'numeric')}</p>
                        <p style="color: rgb(116, 116, 116); font-size: 15px;">$4.99 - Shipping</p>
    
                      </div>
    
                    </label>
    
                  </div>
      
                </div>
                <div class="checkout-product-${cartIndex}-delivery-option3 checkout-product-delivery-option">
      
                  <div>
    
                    <label style="display: flex; flex-direction: row; align-items: center;">
    
                      <input type="radio" class="checkout-product-${cartIndex}-delivery-radio-option3" name = "checkout-product-${cartIndex}">
                      <div style="display: inline-block;">
    
                        <p style="color: green; font-weight: 500; margin: 0px 0px 3px 0px;">${formatDate(updateDate(cartItem.orderPlacedOnUnformated, '+', 'days', 1), 'long', 'long', 'numeric')}</p>
                        <p style="color: rgb(116, 116, 116); font-size: 15px;">$9.99 - Shipping</p>
    
                      </div>
    
                    </label>
    
                  </div>
      
                </div>
              
              </div>
    
            </div>
    
          </div>`;
  
      checkoutListElement.insertAdjacentHTML("beforeend", checkoutItemHTML);

      const tempUpdateButtonElement = document.querySelector(`.cheakout-product-${cartIndex}-quantity-update`);
      const tempDeleteButtonElement = document.querySelector(`.cheakout-product-${cartIndex}-quantity-delete`);

      const tempDeliveryOprion1 = document.querySelector(`.checkout-product-${cartIndex}-delivery-radio-option1`);
      const tempDeliveryOprion2 = document.querySelector(`.checkout-product-${cartIndex}-delivery-radio-option2`);
      const tempDeliveryOprion3 = document.querySelector(`.checkout-product-${cartIndex}-delivery-radio-option3`);
      
      const tempDeliveryOprion1Label = document.querySelector(`.checkout-product-${cartIndex}-delivery-option1`);
      const tempDeliveryOprion2Label = document.querySelector(`.checkout-product-${cartIndex}-delivery-option2`);
      const tempDeliveryOprion3Label = document.querySelector(`.checkout-product-${cartIndex}-delivery-option3`);

      let tempDeliveryCost = 0;

      if(cartItem.deliveryType === 0) {

        const deliveryDateHeaderPerItem = document.querySelector(`.cheakout-product-${cartIndex}-delivery-date`);
        
        let dateToFormat = updateDate(cart[cartIndex].orderPlacedOnUnformated, "+", "days", 9);
        cart[cartIndex].deliveryDate = formatDate(dateToFormat, "long", "long", "numeric");

        deliveryDateHeaderPerItem.innerHTML = `Delivery date: ${cart[cartIndex].deliveryDate}`;

        tempDeliveryOprion1.click();
        cart[cartIndex].deliveryType = 0;
        cart[cartIndex].deliveryCost = 0;

      } else if(cartItem.deliveryType === 1) {

        const deliveryDateHeaderPerItem = document.querySelector(`.cheakout-product-${cartIndex}-delivery-date`);
        
        let dateToFormat = updateDate(cart[cartIndex].orderPlacedOnUnformated, "+", "days", 3);
        cart[cartIndex].deliveryDate = formatDate(dateToFormat, "long", "long", "numeric");

        deliveryDateHeaderPerItem.innerHTML = `Delivery date: ${cart[cartIndex].deliveryDate}`;

        tempDeliveryOprion2.click();
        cart[cartIndex].deliveryType = 1;
        cart[cartIndex].deliveryCost = 499;

      } else if(cartItem.deliveryType === 2) {

        const deliveryDateHeaderPerItem = document.querySelector(`.cheakout-product-${cartIndex}-delivery-date`);
        
        let dateToFormat = updateDate(cart[cartIndex].orderPlacedOnUnformated, "+", "days", 1);
        cart[cartIndex].deliveryDate = formatDate(dateToFormat, "long", "long", "numeric");

        deliveryDateHeaderPerItem.innerHTML = `Delivery date: ${cart[cartIndex].deliveryDate}`;

        tempDeliveryOprion3.click();
        cart[cartIndex].deliveryType = 2;
        cart[cartIndex].deliveryCost = 999;

      } 

      itemTotalShippingCost += tempDeliveryCost;

      tempDeliveryOprion1Label.addEventListener('click', () => {

        const deliveryDateHeaderPerItem = document.querySelector(`.cheakout-product-${cartIndex}-delivery-date`);
        
        let dateToFormat = updateDate(cart[cartIndex].orderPlacedOnUnformated, "+", "days", 9);
        cart[cartIndex].deliveryDate = formatDate(dateToFormat, "long", "long", "numeric");

        deliveryDateHeaderPerItem.innerHTML = `Delivery date: ${cart[cartIndex].deliveryDate}`;

        cart[cartIndex].deliveryType = 0;
        cart[cartIndex].deliveryCost = 0;
        localStorage.setItem('cartLS', JSON.stringify(cart));
        updateSummary();

      });

      tempDeliveryOprion2Label.addEventListener('click', () => {

        const deliveryDateHeaderPerItem = document.querySelector(`.cheakout-product-${cartIndex}-delivery-date`);
        
        let dateToFormat = updateDate(cart[cartIndex].orderPlacedOnUnformated, "+", "days", 3);
        cart[cartIndex].deliveryDate = formatDate(dateToFormat, "long", "long", "numeric");

        deliveryDateHeaderPerItem.innerHTML = `Delivery date: ${cart[cartIndex].deliveryDate}`;

        cart[cartIndex].deliveryType = 1;
        cart[cartIndex].deliveryCost = 499;
        localStorage.setItem('cartLS', JSON.stringify(cart));
        updateSummary();

      });

      tempDeliveryOprion3Label.addEventListener('click', () => {

        const deliveryDateHeaderPerItem = document.querySelector(`.cheakout-product-${cartIndex}-delivery-date`);
        
        let dateToFormat = updateDate(cart[cartIndex].orderPlacedOnUnformated, "+", "days", 1);
        cart[cartIndex].deliveryDate = formatDate(dateToFormat, "long", "long", "numeric");

        deliveryDateHeaderPerItem.innerHTML = `Delivery date: ${cart[cartIndex].deliveryDate}`;

        cart[cartIndex].deliveryType = 2;
        cart[cartIndex].deliveryCost = 999;
        localStorage.setItem('cartLS', JSON.stringify(cart));
        updateSummary();

      });

      tempUpdateButtonElement.addEventListener('click', () => {

        document.querySelector(`.cheakout-product-${cartIndex}-quantity`).innerHTML = `Quantity: 
                  <input type = "number" class = "cheakout-product-${cartIndex}-quantity-input cheakout-product-quantity-input" value = "${cart[cartIndex].quantity}">
                  <p class = "cheakout-product-${cartIndex}-quantity-save cheakout-product-quantity-save">Save</p>
                  <p class = "cheakout-product-${cartIndex}-quantity-delete cheakout-product-quantity-delete">Delete</p>
        `;

        document.querySelector(`.cheakout-product-${cartIndex}-quantity-save`).addEventListener('click', () => {

          cart[cartIndex].quantity = document.querySelector(`.cheakout-product-${cartIndex}-quantity-input`).value;
          localStorage.setItem('cartLS', JSON.stringify(cart));
          addProductHTML_CheckoutPage();
          updateSummary();
          console.log(cart);
  
        });

      });

      tempDeleteButtonElement.addEventListener('click', () => {

        cart.splice(cartIndex, 1);
        localStorage.setItem('cartLS', JSON.stringify(cart));
        addProductHTML_CheckoutPage();
        updateSummary();
        console.log(cart);

      });
  
    });

  } else {

    checkoutItemCountElement.innerHTML = `Checkout (0 items)`;
    
    checkoutSummary.innerHTML = `
  
        <p class="checkout-summary-header">Order Summary</p>

        <div class="checkout-summary-item-count">

          <div>Items (0):</div>

          <div class="cost">$0.00</div>

        </div>

        <div class="checkout-summary-shipping-cost">

          <div>Shipping & handling:</div>

          <div class="cost">$0.00</div>

        </div>

        <div class="checkout-summary-total-before-tax">

          <div>Total before tax:</div>

          <div class="cost">$0.00</div>

        </div>

        <div class="checkout-summary-tax-cost">

          <div>Estimated tax (10%):</div>

          <div class="cost">$0.00</div>

        </div>
        

        <div class="checkout-summary-order-total">

          <div>Order total:</div>

          <div class="cost">$0.00</div>

        </div>

        <div class="checkout-summary-use-paypal">

          <div>Use PayPal</div>

          <input class = "checkout-pay-with-paypal" type="checkbox">

        </div>

        <button class="checkout-place-order-button disable-button">Place your order</button>
    
    `;

    checkoutListElement.innerHTML = `
    
    <div class="checkout-empty">

      <div>
        Your cart is empty.
      </div>
      
      <button class="checkout-view-products">
        View products
      </button>
    
    </div>
    
    `;

    document.querySelector(`.checkout-view-products`).addEventListener('click', () => {

      window.location.href = 'home-page.html';

    });
    
  }

}

function updateSummary() {

  itemTotalCostNoShipAndNoTax = 0;
  itemTotalShippingCost = 0;
  itemTotalCostBeforeTax = 0;
  itemTax = 0;
  checkoutTotalCost = 0;

  cart.forEach((cartItem1) => {

    itemTotalCostNoShipAndNoTax += parseInt(cartItem1.price * cartItem1.quantity);

    itemTotalShippingCost += parseInt(cartItem1.deliveryCost);

  });

  itemTotalCostBeforeTax = itemTotalCostNoShipAndNoTax+itemTotalShippingCost;
  itemTax = Math.round(itemTotalCostBeforeTax * 0.1);

  checkoutTotalCost = itemTotalCostBeforeTax + itemTax;

  checkoutItemCountElement.innerHTML = `Checkout (${cart.length} items)`;

  document.querySelector('.checkout-summary-item-count').innerHTML = `
  
            <div>Items (${cart.length}):</div>
  
            <div class="cost">$${(itemTotalCostNoShipAndNoTax/100).toFixed(2)}</div>
            
            `;

  document.querySelector('.checkout-summary-shipping-cost').innerHTML = `
  
            <div>Shipping & handling:</div>
  
            <div class="cost">$${(itemTotalShippingCost/100).toFixed(2)}</div>
            
            `;

  document.querySelector('.checkout-summary-total-before-tax').innerHTML = `
  
            <div>Total before tax:</div>
  
            <div class="cost">$${(itemTotalCostBeforeTax/100).toFixed(2)}</div>
            
            `;

  document.querySelector('.checkout-summary-tax-cost').innerHTML = `
  
            <div>Estimated tax (10%):</div>
  
            <div class="cost">$${(itemTax/100).toFixed(2)}</div>
          
           `;

  document.querySelector('.checkout-summary-order-total').innerHTML = `
  
            <div>Order total:</div>
  
            <div class="cost">$${(checkoutTotalCost/100).toFixed(2)}</div>
          
          `;

  console.log(cart);

}