if(cart.length <= 9) {

  cartItemCountElement.innerHTML = cart.length;

} else {

  cartItemCountElement.innerHTML = "9+";

}

console.log(orderToTrack);

document.querySelector('.css-tracking-section').innerHTML = `

      <a class = 'view-all-orders' href="home-page.html">View all orders</a>

      <p class = "delivery-date">Delivered on ${orderToTrack[0].deliveryDate}</p>
      <p class = "delivery-product-name">${orderToTrack[0].name}</p>
      <p class = "delivery-quantity">Quantity: ${orderToTrack[0].quantity}</p>

      <img class="delivery-product-image" src="${orderToTrack[0].image}" alt="">

      <div class="delivery-progress-section">

        <div class="progress-type">

          <p class="progress-type-preparing">Preparing</p>

          <p class="progress-type-shipped">Shipped</p>

          <p class="progress-type-delivered">Delivered</p>

        </div>

        <div class="progress-bar-main">
          <div class="progress-bar-inner"></div>
        </div>

      </div>`;


function updateDeliveryProgressBar() {

  if(orderToTrack[0].deliveryProgressStage === 0) {
  
    document.querySelector('.progress-bar-inner').classList.add('progress-bar-inner-stage-0');
    document.querySelector('.progress-type-preparing').classList.add('green');
    document.querySelector('.progress-type-shipped').classList.remove('green');
    document.querySelector('.progress-type-delivered').classList.remove('green');
  
  } else if(orderToTrack[0].deliveryProgressStage === 1) {
    
    document.querySelector('.progress-bar-inner').classList.add('progress-bar-inner-stage-1');
    document.querySelector('.progress-type-preparing').classList.remove('green');
    document.querySelector('.progress-type-shipped').classList.add('green');
    document.querySelector('.progress-type-delivered').classList.remove('green');
  
  } else if(orderToTrack[0].deliveryProgressStage === 2) {
    
    document.querySelector('.progress-bar-inner').classList.add('progress-bar-inner-stage-2');
    document.querySelector('.progress-type-preparing').classList.remove('green');
    document.querySelector('.progress-type-shipped').classList.remove('green');
    document.querySelector('.progress-type-delivered').classList.add('green');
  
  }

}

