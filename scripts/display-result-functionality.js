showResult_HomePage(products);
    
console.log(cart);

function showResult_HomePage(products) {

  products.forEach((product, index) => {
  
    addProductHTML_HomePage(product, index);
  
    let tempQuantityBtnElement = document.querySelector(`.quantity-dropdown-product-${index}`);
    
    try {
      product.color.forEach((value, colorIndex) => {
        let tempColorBtnElements = document.querySelector(`.product-${index}-color-variant${colorIndex}`);
  
        if(colorIndex === 0) {
          
          unselectAllAndSelectOne('color', tempColorBtnElements, index);
        }
        
        tempColorBtnElements.addEventListener('click', () => {
          
          unselectAllAndSelectOne('color', tempColorBtnElements, index);

          updateProductImage(product, index);
          
        });
      });
    } catch(e) {
      // No color variant for ${product.name}
    }
  
    try {
      product.size.forEach((value, sizeIndex) => {
        let tempSizeBtnElements = document.querySelector(`.product-${index}-size-variant${sizeIndex}`);
  
        if(sizeIndex === 0) {
          
          unselectAllAndSelectOne('size', tempSizeBtnElements, index);
        }
        
        tempSizeBtnElements.addEventListener('click', () => {
          
          unselectAllAndSelectOne('size', tempSizeBtnElements, index);

          updateProductImage(product, index);
          
        });
      });
    } catch(e) {
      // No size variant for ${product.name}
    }
  
    let tempAddToCartBtnElement = document.querySelector(`.add-to-cart-product-${index}`);
    let selectedColor = '';
    let selectedSize = '';
  
    let tempColorBtnElements = document.querySelectorAll(`[class*="product-${index}-color-variant"]`);
    let tempSizeBtnElements = document.querySelectorAll(`[class*="product-${index}-size-variant"]`);
    let tempAddIconElement = document.querySelector(`.addedIcon-${index}`);
    let tempAddTextElement = document.querySelector(`.addedText-${index}`);

    let tempProductImageElement = document.querySelector(`.product-img-${index}`);
  
    tempAddToCartBtnElement.addEventListener('click', () => {
  
      tempColorBtnElements.forEach((element, index) => {
  
        if(element.classList.contains('button-clicked-accent')) {
          selectedColor = element.value;
        }
  
      });
  
      tempSizeBtnElements.forEach((element, index) => {
  
        if(element.classList.contains('button-clicked-accent')) {
          selectedSize = element.value;
        }
  
      });

      if(cart.length > 0) {

        for(let cartIndex = 0; cartIndex < cart.length; cartIndex++) {

          if(cart[cartIndex].name === product.name) {

            cart[cartIndex].quantity = parseInt(cart[cartIndex].quantity, 10) + parseInt(tempQuantityBtnElement.value, 10);
            break;

          } else {

            cart.push({
              name : product.name,
              image : tempProductImageElement.getAttribute('src'),
              color : selectedColor,
              size : selectedSize,
              quantity : tempQuantityBtnElement.value,
              price : product.price,
              orderPlacedOn : new Date().toISOString().slice(0, 10),
              deliveryType : 0,
              deliveryCost : 0
            });
            break;

          }

        }

      } else {
    
        cart.push({
          name : product.name,
          image : tempProductImageElement.getAttribute('src'),
          color : selectedColor,
          size : selectedSize,
          quantity : tempQuantityBtnElement.value,
          price : product.price,
          orderPlacedOn : new Date().toISOString().slice(0, 10),
          deliveryType : 0,
          deliveryCost : 0
        });

      }
    
      console.log(cart);

      localStorage.setItem('cartLS', JSON.stringify(cart));

      tempAddIconElement.classList.remove('hide-if-not-added');
      tempAddTextElement.classList.remove('hide-if-not-added');
      
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        tempAddIconElement.classList.add('hide-if-not-added');
        tempAddTextElement.classList.add('hide-if-not-added');
      },2000);
  
      let cartItemCount = 0;
      
      cart.forEach((product, prodIndex) => {
  
        // if(product.quantity > 0) {
  
        //   cartItemCount += parseInt(product.quantity);
  
        // }

        cartItemCount++;

      });
  
      if(cartItemCount <= 9) {
  
        cartItemCountElement.innerHTML = cartItemCount;
  
      } else {
  
        cartItemCountElement.innerHTML = '9+';
        cartItemCountElement.classList.add('cartItemCountMoreThan9');
  
      }
  
    });

    updateProductImage(product, index);
  
  });

}

function addProductHTML_HomePage(product, index) {
  let productListingHtml = '';

  let blankSectionCount = [];
  
  productListingHtml += `
  <div class="product product-${index}">

    <div class="product-img-div">

      <img class = "product-img product-img-${index}" src="${product.image[0]}">

    </div>

    <p class="product-name">${product.name}</p>

    <div class="rating-div">

      <img class = 'review-stars' src="images/rating-${product.reviewStars}.png" alt="4.5/5.0">
      <p class = 'review-count'>${product.reviewCount}</p>

    </div>

    <p class="price">$${(product.price/100).toFixed(2)}</p>

    <div class="quantity-dropdown-div">

      <select class="quantity-dropdown quantity-dropdown-product-${index}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
      </select>

    </div>`;
    
    if(Object.keys(product).includes('color')) {
      productListingHtml += `

    <div class="variant-div">

      <p class="variant-size-label">Color</p>`;
      
      product.color.forEach((value, colorIndex) => {
        productListingHtml += `

      <button class="product-${index}-color-variant${colorIndex} button-accent" value="${value}">

        ${value}

      </button>`;
      
      });
      productListingHtml += `

    </div>`;
    } else {
      blankSectionCount.push('color');
    }

    if(Object.keys(product).includes('size')) {
      productListingHtml += `

    <div class="size-div">

      <p class="variant-size-label">Size</p>`;
      
      product.size.forEach((value, sizeIndex) => {
        productListingHtml += `

      <button class="product-${index}-size-variant${sizeIndex} button-accent" value="${value}">

        ${value}

      </button>`
      });
      productListingHtml += `

    </div>`;
    } else {
      blankSectionCount.push('size');
    }

    if(blankSectionCount.length === 1 && blankSectionCount[0] === 'color') {
      productListingHtml += `

      <div class="variant-div">

        <p class="variant-size-label hide-if-no-variants">Color</p>

        <button class="yellow-variant button-accent hide-if-no-variants">

          Yellow

        </button>

        <button class="teal-variant button-accent hide-if-no-variants">

          Teal

        </button>

      </div>`;
    }
    
    if(blankSectionCount.length === 1 && blankSectionCount[0] === 'size') {
      productListingHtml += `

      <div class="size-div">
  
        <p class="variant-size-label hide-if-no-variants">Size</p>
  
        <button class="small-variant button-accent hide-if-no-variants">
  
          S
  
        </button>
  
        <button class="medium-variant button-accent hide-if-no-variants">
  
          M
  
        </button>
  
        <button class="large-variant button-accent hide-if-no-variants">
  
          L
  
        </button>
  
      </div>`;
    }
    
    if(blankSectionCount.length === 2) {
      productListingHtml += `

      <div class="variant-div">

        <p class="variant-size-label hide-if-no-variants">Color</p>

        <button class="yellow-variant button-accent hide-if-no-variants">

          Yellow

        </button>

        <button class="teal-variant button-accent hide-if-no-variants">

          Teal

        </button>

      </div>

      <div class="size-div">
  
        <p class="variant-size-label hide-if-no-variants">Size</p>
  
        <button class="small-variant button-accent hide-if-no-variants">
  
          S
  
        </button>
  
        <button class="medium-variant button-accent hide-if-no-variants">
  
          M
  
        </button>
  
        <button class="large-variant button-accent hide-if-no-variants">
  
          L
  
        </button>
  
      </div>`;
    }

    productListingHtml += `

    <div class = 'addedMessage'>
      <img class = 'addedIcon-${index}  hide-if-not-added' style = 'margin : 0px 4px 0px 0px' src="images/checkmark.png" alt="✓"><p class = 'addedText-${index}  hide-if-not-added'>Added</p>
    </div>

    <button class="add-to-cart add-to-cart-product-${index}" value = "product-${index}">
      Add to Cart
    </button>
    
  </div>
  `;

  productListingElement.insertAdjacentHTML("beforeend", productListingHtml);
}

function unselectAllAndSelectOne(variantType, btnElement, productIndex) {

  let tempVariantBtnElements;

  if(variantType === 'size') {

    tempVariantBtnElements = document.querySelectorAll(`[class*="product-${productIndex}-size-variant"]`);

  } else if(variantType === 'color') {

    tempVariantBtnElements = document.querySelectorAll(`[class*="product-${productIndex}-color-variant"]`);

  }

  tempVariantBtnElements.forEach((variantBtn, variantIndex) => {

    if(variantBtn.classList.contains('button-clicked-accent')) {
      variantBtn.classList.remove('button-clicked-accent');
      variantBtn.classList.add('button-accent');
    }

  });

  if(btnElement.classList.contains('button-accent')) {
    btnElement.classList.remove('button-accent');
    btnElement.classList.add('button-clicked-accent');
  }

}

function updateProductImage(product, index) {
  
  let colorVariantClasses = document.querySelectorAll(`[class*="product-${index}-color-variant"]`);
  let selectedColor;
  
  colorVariantClasses.forEach((value) => {
    if(value.classList.contains('button-clicked-accent')) {
      if(value.value !== undefined) {
        selectedColor = value.value.toLowerCase();
      }
    }
  });
  
  let sizeVariantClasses = document.querySelectorAll(`[class*="product-${index}-size-variant"]`);

  let selectedSize;
  
  sizeVariantClasses.forEach((value) => {
    if(value.classList.contains('button-clicked-accent')) {
      if(value.value !== undefined) {
        selectedSize = value.value.toLowerCase();
      }
    }
  });

  if(selectedSize === 's') {
    selectedSize = 'small';
  } else if(selectedSize === 'm') {
    selectedSize = 'medium';
  } else if(selectedSize === 'l') {
    selectedSize = 'large';
  } else if(selectedSize === 'xs') {
    selectedSize = 'extra-small';
  }

  let productImages = [];


  if(selectedSize !== undefined && selectedColor !== undefined) {

    //Size and Color exist
    //Change required

    product.image.forEach((imagePath) => {

      if(imagePath.includes(selectedColor)) {
        productImages.push(imagePath);
      }

    });

    productImages.forEach((imgPth) => {

      if(imgPth.includes(selectedSize)) {

        document.querySelector(`.product-${index}`).getElementsByClassName('product-img')[0].src = imgPth;

      } else {

        document.querySelector(`.product-${index}`).getElementsByClassName('product-img')[0].src = productImages[0];

      }

    });

  }

  else if(selectedSize === undefined && selectedColor !== undefined) {

    //No Size but Color exists
    //Change required

    product.image.forEach((imagePath) => {

      if(imagePath.includes(selectedColor)) {
        productImages.push(imagePath);
      }

    });

    document.querySelector(`.product-${index}`).getElementsByClassName('product-img')[0].src = productImages[0];

  }

  else if(selectedSize !== undefined && selectedColor === undefined) {

    //No Color but Size exists
    //Change required

    product.image.forEach((imagePath) => {

      if(imagePath.includes(selectedSize)) {
        productImages.push(imagePath);
      }

    });

    if(productImages.length > 0) {

      document.querySelector(`.product-${index}`).getElementsByClassName('product-img')[0].src = productImages[0];

    }

  }

  else if(selectedSize === undefined && selectedColor === undefined) {

    //No Size and No Color
    //No change required

  }

}