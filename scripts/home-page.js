const productListingElement = document.querySelector('.css-product-listing');
const searchBoxElement = document.querySelector('.css-searchbox');
const searchButtonElement = document.querySelector('.css-searchbutton');
const cartItemCountElement = document.querySelector('.cartItemCount');

let products = [
  {
    image : ['images/sockType1.jpg','socks1'],
    name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    reviewStars : 45,
    reviewCount : 87,
    price : 1090,
    quantity : 1
  },
  {
    image : ['images/intermediate-composite-basketball.jpg','socks1'],
    name : 'Intermediate Size Basketball',
    reviewStars : 40,
    reviewCount : 127,
    price : 2095,
    quantity : 1
  },
  {
    image : ['images/adults-plain-cotton-tshirt-2-pack-teal.jpg','socks1'],
    name : 'Adults Plain Cotton T-Shirt - 2 Pack',
    reviewStars : 45,
    reviewCount : 56,
    price : 799,
    quantity : 1
  },
  {
    image : ['images/black-2-slot-toaster.jpg','socks1'],
    name : '2 Slot Toaster - Black',
    reviewStars : 50,
    reviewCount : 2197,
    price : 1899,
    quantity : 1
  },
  {
    image : ['images/6-piece-white-dinner-plate-set.jpg','socks1'],
    name : '6 Piece White Dinner Plate Set',
    reviewStars : 40,
    reviewCount : 37,
    price : 2067,
    quantity : 1
  },
  {
    image : ['images/6-piece-non-stick-baking-set.webp','socks1'],
    name : '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
    reviewStars : 45,
    reviewCount : 175,
    price : 3499,
    quantity : 1
  },
  {
    image : ['images/plain-hooded-fleece-sweatshirt-yellow.jpg','socks1'],
    name : 'Plain Hooded Fleece Sweatshirt',
    reviewStars : 45,
    reviewCount : 317,
    price : 2400,
    quantity : 1,
    color : ['Yellow','Teal'],
    size : ['S','M','L']
  },
  {
    image : ['images/luxury-tower-set-6-piece.jpg','socks1'],
    name : 'Luxury Towel Set - Graphite Gray',
    reviewStars : 45,
    reviewCount : 305,
    price : 2899,
    quantity : 1,
    set : ['6-Piece','4-Piece']
  },
  {
    image : ['images/liquid-laundry-detergent-plain.jpg','socks1'],
    name : 'Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz',
    reviewStars : 45,
    reviewCount : 305,
    price : 1090,
    quantity : 1,
    style : ['Plain','Lavender']
  },
  {
    image : ['images/knit-athletic-sneakers-gray.jpg','socks1'],
    name : 'Waterproof Knit Athletic Sneakers - Gray',
    reviewStars : 40,
    reviewCount : 89,
    price : 3390,
    quantity : 1,
    size : [5,6,7,8,9]
  },
  {
    image : ['images/women-chiffon-beachwear-coverup-black.jpg','socks1'],
    name : "Women's Chiffon Beachwear Cover Up - Black",
    reviewStars : 45,
    reviewCount : 235,
    price : 2070,
    quantity : 1
  },
  {
    image : ['images/round-sunglasses-black.jpg','socks1'],
    name : 'Round Sunglasses',
    reviewStars : 45,
    reviewCount : 30,
    price : 1560,
    quantity : 1,
    style : ['Black','Gold']
  },
  {
    image : ['images/women-beach-sandals.jpg','socks1'],
    name : "Women's Two Strap Buckle Sandals - Tan",
    reviewStars : 45,
    reviewCount : 562,
    price : 2499,
    quantity : 1,
    size : [7,8,9]
  },
  {
    image : ['images/blackout-curtain-set-beige.webp','socks1'],
    name : 'Blackout Curtains Set 4-Pack - Beige',
    reviewStars : 45,
    reviewCount : 232,
    price : 4599,
    quantity : 1
  },
  {
    image : ['images/men-slim-fit-summer-shorts-gray.jpg','socks1'],
    name : "Men's Slim-Fit Summer Shorts",
    reviewStars : 40,
    reviewCount : 160,
    price : 1699,
    quantity : 1,
    color : ['Gray','Black','Beige'],
    size : [30,31,32]
  },
  {
    image : ['images/electric-glass-and-steel-hot-water-kettle.webp','socks1'],
    name : 'Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter',
    reviewStars : 50,
    reviewCount : 846,
    price : 3074,
    quantity : 1
  },
  {
    image : ['images/facial-tissue-2-ply-18-boxes.jpg','socks1'],
    name : 'Ultra Soft Tissue 2-Ply - 18 Box',
    reviewStars : 40,
    reviewCount : 99,
    price : 2374,
    quantity : 1
  },
  {
    image : ['images/straw-sunhat.webp','socks1'],
    name : 'Straw Lifeguard Sun Hat',
    reviewStars : 40,
    reviewCount : 215,
    price : 2200,
    quantity : 1
  },
  {
    image : ['images/sky-flower-stud-earrings.webp','socks1'],
    name : 'Sterling Silver Sky Flower Stud Earrings',
    reviewStars : 45,
    reviewCount : 52,
    price : 1799,
    quantity : 1
  },
  {
    image : ['images/women-stretch-popover-hoodie-black.jpg','socks1'],
    name : "Women's Stretch Popover Hoodie",
    reviewStars : 45,
    reviewCount : 2465,
    price : 1374,
    quantity : 1,
    color : ['Black','Gray','Blue'],
    size : ['XS','S','M','L']
  },
  {
    image : ['images/bathroom-rug.jpg','socks1'],
    name : 'Bathroom Bath Rug Mat 20 x 31 Inch - Grey',
    reviewStars : 45,
    reviewCount : 119,
    price : 1250,
    quantity : 1
  },
  {
    image : ['images/women-knit-ballet-flat-black.jpg','socks1'],
    name : "Women's Knit Ballet Flat",
    reviewStars : 40,
    reviewCount : 326,
    price : 2640,
    quantity : 1,
    color : ['Black','Gray'],
    size : [6,7,8]
  },
  {
    image : ['images/men-golf-polo-t-shirt-blue.jpg','socks1'],
    name : "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    reviewStars : 45,
    reviewCount : 2556,
    price : 1599,
    quantity : 1,
    color : ['Blue','Black','Red'],
    size : ['S','M','L']
  },
  {
    image : ['images/trash-can-with-foot-pedal-50-liter.jpg','socks1'],
    name : 'Trash Can with Foot Pedal - Brushed Stainless Steel',
    reviewStars : 45,
    reviewCount : 2286,
    price : 8300,
    quantity : 1,
    size : ['50L', '30L Tall']
  },
  {
    image : ['images/duvet-cover-set-blue-twin.jpg','socks1'],
    name : 'Duvet Cover Set with Zipper Closure',
    reviewStars : 40,
    reviewCount : 456,
    price : 2399,
    quantity : 1,
    color : ['Blue','Red'],
    size : ['Twin', 'Queen']
  },
  {
    image : ['images/women-chunky-beanie-gray.webp','socks1'],
    name : "Women's Chunky Cable Beanie - Gray",
    reviewStars : 50,
    reviewCount : 83,
    price : 1250,
    quantity : 1
  },
  {
    image : ['images/men-chino-pants-beige.jpg','socks1'],
    name : "Men's Classic-fit Pleated Chino Pants",
    reviewStars : 45,
    reviewCount : 9017,
    price : 2290,
    quantity : 1,
    color : ['Beige','Green','Black'],
    size : [30,31,32]
  },
  {
    image : ['images/men-athletic-shoes-green.jpg','socks1'],
    name : "Men's Athletic Sneaker",
    reviewStars : 40,
    reviewCount : 229,
    price : 3890,
    quantity : 1,
    color : ['Green','Black'],
    size : [9,10,11,12]
  },
  {
    image : ['images/men-navigator-sunglasses-brown.jpg','socks1'],
    name : "Men's Navigator Sunglasses Pilot",
    reviewStars : 35,
    reviewCount : 42,
    price : 1690,
    quantity : 1,
    color : ['Brown','Silver']
  },
  {
    image : ['images/non-stick-cooking-set-15-pieces.webp','socks1'],
    name : 'Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces',
    reviewStars : 45,
    reviewCount : 511,
    price : 6797,
    quantity : 1
  },
  {
    image : ['images/vanity-mirror-silver.jpg','socks1'],
    name : 'Vanity Mirror with Heavy Base - Chrome',
    reviewStars : 45,
    reviewCount : 130,
    price : 1649,
    quantity : 1
  },
  {
    image : ['images/women-french-terry-fleece-jogger-camo.jpg','socks1'],
    name : "Women's Fleece Jogger Sweatpant",
    reviewStars : 45,
    reviewCount : 248,
    price : 2400,
    quantity : 1,
    color : ['Camo','Gray'],
    size : ['S','M','L']
  },
  {
    image : ['images/double-elongated-twist-french-wire-earrings.webp','socks1'],
    name : 'Double Oval Twist French Wire Earrings - Gold',
    reviewStars : 45,
    reviewCount : 117,
    price : 2400,
    quantity : 1
  },
  {
    image : ['images/round-airtight-food-storage-containers.jpg','socks1'],
    name : 'Round Airtight Food Storage Containers - 5 Piece',
    reviewStars : 40,
    reviewCount : 126,
    price : 2899,
    quantity : 1
  },
  {
    image : ['images/coffeemaker-with-glass-carafe-black.jpg','socks1'],
    name : 'Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz,...',
    reviewStars : 45,
    reviewCount : 1211,
    price : 2250,
    quantity : 1
  },
  {
    image : ['images/blackout-curtains-black.jpg','socks1'],
    name : 'Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels',
    reviewStars : 45,
    reviewCount : 363,
    price : 3099,
    quantity : 1
  },
  {
    image : ['images/cotton-bath-towels-teal.webp','socks1'],
    name : '100% Cotton Bath Towels - 2 Pack, Light Teal',
    reviewStars : 45,
    reviewCount : 93,
    price : 2110,
    quantity : 1
  },
  {
    image : ['images/knit-athletic-sneakers-pink.webp','socks1'],
    name : 'Waterproof Knit Athletic Sneakers - Pink',
    reviewStars : 40,
    reviewCount : 89,
    price : 3390,
    quantity : 1,
    size : [6,7,8,9]
  },
  {
    image : ['images/countertop-blender-64-oz.jpg','socks1'],
    name : 'Countertop Blender - 64oz, 1400 Watts',
    reviewStars : 40,
    reviewCount : 3,
    price : 10747,
    quantity : 1
  },
  {
    image : ['images/floral-mixing-bowl-set.jpg','socks1'],
    name : '10-Piece Mixing Bowl Set with Lids - Floral',
    reviewStars : 50,
    reviewCount : 679,
    price : 3899,
    quantity : 1
  },
  {
    image : ['images/kitchen-paper-towels-30-pack.jpg','socks1'],
    name : '2-Ply Kitchen Paper Towels - 30 Pack',
    reviewStars : 45,
    reviewCount : 1045,
    price : 5799,
    quantity : 1
  },
  {
    image : ['images/men-cozy-fleece-zip-up-hoodie-red.jpg','socks1'],
    name : "Men's Full-Zip Hooded Fleece Sweatshirt",
    reviewStars : 45,
    reviewCount : 3157,
    price : 2400,
    quantity : 1,
    color : ['Red', 'Black'],
    size : ['M','L','XL']
  },
];

let cart = [];

showResult(products);

searchBoxElement.addEventListener('keydown', (event) => {

  if(event.key === 'Enter') {
    productListingElement.innerHTML = '';
    searchButtonAction(products);
  }
  
});

searchButtonElement.addEventListener('click', () => {
  productListingElement.innerHTML = '';
  searchButtonAction(products);
});

function searchButtonAction(searchData) {

  let searchResult = [];
  let searchKeyword = searchBoxElement.value;

  searchData.forEach((value) => {
    if(value.name.toLowerCase().includes(searchKeyword.toLowerCase())){
      
      searchResult.push(value);

    }
  });

  showResult(searchResult);
  console.log(searchResult);

}

function showResult(products) {

  products.forEach((product, index) => {
  
    addProductHTML(product, index);
  
    let tempQuantityBtnElement = document.querySelector(`.quantity-dropdown-product-${index}`);
    
    try {
      product.color.forEach((value, colorIndex) => {
        let tempColorBtnElements = document.querySelector(`.product-${index}-color-variant${colorIndex}`);
  
        if(colorIndex === 0) {
          
          unselectAllAndSelectOne('color', tempColorBtnElements, index);
        }
        
        tempColorBtnElements.addEventListener('click', () => {
          
          unselectAllAndSelectOne('color', tempColorBtnElements, index);
          
        });
      });
    } catch(e) {
      // console.log(`No color variant for ${product.name}`);
    }
  
    try {
      product.size.forEach((value, sizeIndex) => {
        let tempSizeBtnElements = document.querySelector(`.product-${index}-size-variant${sizeIndex}`);
  
        if(sizeIndex === 0) {
          
          unselectAllAndSelectOne('size', tempSizeBtnElements, index);
        }
        
        tempSizeBtnElements.addEventListener('click', () => {
          
          unselectAllAndSelectOne('size', tempSizeBtnElements, index);
          
        });
      });
    } catch(e) {
      // console.log(`No size variant for ${product.name}`);
    }
  
    let tempAddToCartBtnElement = document.querySelector(`.add-to-cart-product-${index}`);
    let selectedColor = '';
    let selectedSize = '';
  
    let tempColorBtnElements = document.querySelectorAll(`[class*="product-${index}-color-variant"]`);
    let tempSizeBtnElements = document.querySelectorAll(`[class*="product-${index}-size-variant"]`);
    let tempAddIconElement = document.querySelector(`.addedIcon-${index}`);
    let tempAddTextElement = document.querySelector(`.addedText-${index}`);
  
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
  
      console.log({
        name : product.name,
        color : selectedColor,
        size : selectedSize,
        quantity : tempQuantityBtnElement.value
      });
    
      cart.push({
        name : product.name,
        color : selectedColor,
        size : selectedSize,
        quantity : tempQuantityBtnElement.value
      });

      tempAddIconElement.classList.remove('hide-if-not-added');
      tempAddTextElement.classList.remove('hide-if-not-added');
      setTimeout(() => {
        tempAddIconElement.classList.add('hide-if-not-added');
        tempAddTextElement.classList.add('hide-if-not-added');
      },2000);
  
      let cartItemCount = 0;
      
      cart.forEach((product, prodIndex) => {
  
        if(product.quantity > 0) {
  
          cartItemCount += parseInt(product.quantity);
  
        }
      });
  
      if(cartItemCount <= 9) {
  
        cartItemCountElement.innerHTML = cartItemCount;
  
      } else {
  
        cartItemCountElement.innerHTML = '9+';
        cartItemCountElement.classList.add('cartItemCountMoreThan9');
  
      }
  
    });
  
  });

}

function addProductHTML(product, index) {
  let productListingHtml = '';

  let blankSectionCount = [];
  
  productListingHtml += `
  <div class="product product-${index}">

    <div class="product-img-div">

      <img class = "product-img" src="${product.image[0]}" alt="${product.image[1]}">

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