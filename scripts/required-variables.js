const productListingElement = document.querySelector('.css-product-listing');
const ordersSectionElement = document.querySelector('.css-orders-section');
const ordersListElement = document.querySelector('.css-order-list');
const orderPlacedElement = document.querySelector('.order-placed-date');
const orderTotalPriceElement = document.querySelector('.order-total');
const searchBoxElement = document.querySelector('.css-searchbox');
const searchButtonElement = document.querySelector('.css-searchbutton');
const cartItemCountElement = document.querySelector('.cartItemCount');
const checkoutItemCountElement = document.querySelector('.checkout-checkout-count');
const checkoutListElement = document.querySelector('.checkout-list');
const checkoutSummary = document.querySelector('.checkout-summary');
const checkoutPlaceOrderButtonElement = document.querySelector('.checkout-place-order-button');

const amazonLogo = document.querySelector('.css-logo');

let products = [
  {
    image : ['images/sockType1.jpg'],
    name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    reviewStars : 45,
    reviewCount : 87,
    price : 1090,
    quantity : 1
  },
  {
    image : ['images/intermediate-composite-basketball.jpg'],
    name : 'Intermediate Size Basketball',
    reviewStars : 40,
    reviewCount : 127,
    price : 2095,
    quantity : 1
  },
  {
    image : ['images/adults-plain-cotton-tshirt-2-pack-teal.jpg'],
    name : 'Adults Plain Cotton T-Shirt - 2 Pack',
    reviewStars : 45,
    reviewCount : 56,
    price : 799,
    quantity : 1
  },
  {
    image : ['images/black-2-slot-toaster.jpg'],
    name : '2 Slot Toaster - Black',
    reviewStars : 50,
    reviewCount : 2197,
    price : 1899,
    quantity : 1
  },
  {
    image : ['images/6-piece-white-dinner-plate-set.jpg'],
    name : '6 Piece White Dinner Plate Set',
    reviewStars : 40,
    reviewCount : 37,
    price : 2067,
    quantity : 1
  },
  {
    image : ['images/6-piece-non-stick-baking-set.webp'],
    name : '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
    reviewStars : 45,
    reviewCount : 175,
    price : 3499,
    quantity : 1
  },
  {
    image : ['images/plain-hooded-fleece-sweatshirt-yellow.jpg','images/plain-hooded-fleece-sweatshirt-teal.jpg'],
    name : 'Plain Hooded Fleece Sweatshirt',
    reviewStars : 45,
    reviewCount : 317,
    price : 2400,
    quantity : 1,
    color : ['Yellow','Teal'],
    size : ['S','M','L']
  },
  {
    image : ['images/luxury-tower-set-6-piece.jpg','images/luxury-tower-set-4-piece.jpg'],
    name : 'Luxury Towel Set - Graphite Gray',
    reviewStars : 45,
    reviewCount : 305,
    price : 2899,
    quantity : 1,
    set : ['6-Piece','4-Piece']
  },
  {
    image : ['images/liquid-laundry-detergent-plain.jpg','images/liquid-laundry-detergent-lavender.jpg'],
    name : 'Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz',
    reviewStars : 45,
    reviewCount : 305,
    price : 1090,
    quantity : 1,
    style : ['Plain','Lavender']
  },
  {
    image : ['images/knit-athletic-sneakers-gray.jpg'],
    name : 'Waterproof Knit Athletic Sneakers - Gray',
    reviewStars : 40,
    reviewCount : 89,
    price : 3390,
    quantity : 1,
    size : [5,6,7,8,9]
  },
  {
    image : ['images/women-chiffon-beachwear-coverup-black.jpg'],
    name : "Women's Chiffon Beachwear Cover Up - Black",
    reviewStars : 45,
    reviewCount : 235,
    price : 2070,
    quantity : 1
  },
  {
    image : ['images/round-sunglasses-black.jpg','images/round-sunglasses-gold.jpg'],
    name : 'Round Sunglasses',
    reviewStars : 45,
    reviewCount : 30,
    price : 1560,
    quantity : 1,
    style : ['Black','Gold']
  },
  {
    image : ['images/women-beach-sandals.jpg'],
    name : "Women's Two Strap Buckle Sandals - Tan",
    reviewStars : 45,
    reviewCount : 562,
    price : 2499,
    quantity : 1,
    size : [7,8,9]
  },
  {
    image : ['images/blackout-curtain-set-beige.webp'],
    name : 'Blackout Curtains Set 4-Pack - Beige',
    reviewStars : 45,
    reviewCount : 232,
    price : 4599,
    quantity : 1
  },
  {
    image : ['images/men-slim-fit-summer-shorts-gray.jpg','images/men-slim-fit-summer-shorts-black.jpg','images/men-slim-fit-summer-shorts-beige.jpg'],
    name : "Men's Slim-Fit Summer Shorts",
    reviewStars : 40,
    reviewCount : 160,
    price : 1699,
    quantity : 1,
    color : ['Gray','Black','Beige'],
    size : [30,31,32]
  },
  {
    image : ['images/electric-glass-and-steel-hot-water-kettle.webp'],
    name : 'Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter',
    reviewStars : 50,
    reviewCount : 846,
    price : 3074,
    quantity : 1
  },
  {
    image : ['images/facial-tissue-2-ply-18-boxes.jpg'],
    name : 'Ultra Soft Tissue 2-Ply - 18 Box',
    reviewStars : 40,
    reviewCount : 99,
    price : 2374,
    quantity : 1
  },
  {
    image : ['images/straw-sunhat.webp'],
    name : 'Straw Lifeguard Sun Hat',
    reviewStars : 40,
    reviewCount : 215,
    price : 2200,
    quantity : 1
  },
  {
    image : ['images/sky-flower-stud-earrings.webp'],
    name : 'Sterling Silver Sky Flower Stud Earrings',
    reviewStars : 45,
    reviewCount : 52,
    price : 1799,
    quantity : 1
  },
  {
    image : ['images/women-stretch-popover-hoodie-black.jpg','images/women-stretch-popover-hoodie-gray.jpg','images/women-stretch-popover-hoodie-blue.jpg'],
    name : "Women's Stretch Popover Hoodie",
    reviewStars : 45,
    reviewCount : 2465,
    price : 1374,
    quantity : 1,
    color : ['Black','Gray','Blue'],
    size : ['XS','S','M','L']
  },
  {
    image : ['images/bathroom-rug.jpg'],
    name : 'Bathroom Bath Rug Mat 20 x 31 Inch - Grey',
    reviewStars : 45,
    reviewCount : 119,
    price : 1250,
    quantity : 1
  },
  {
    image : ['images/women-knit-ballet-flat-black.jpg','images/women-knit-ballet-flat-gray.jpg'],
    name : "Women's Knit Ballet Flat",
    reviewStars : 40,
    reviewCount : 326,
    price : 2640,
    quantity : 1,
    color : ['Black','Gray'],
    size : [6,7,8]
  },
  {
    image : ['images/men-golf-polo-t-shirt-blue.jpg','images/men-golf-polo-t-shirt-black.jpg','images/men-golf-polo-t-shirt-red.jpg'],
    name : "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    reviewStars : 45,
    reviewCount : 2556,
    price : 1599,
    quantity : 1,
    color : ['Blue','Black','Red'],
    size : ['S','M','L']
  },
  {
    image : ['images/trash-can-with-foot-pedal-50-liter.jpg','images/trash-can-with-foot-pedal-30-liter-tall.jpg'],
    name : 'Trash Can with Foot Pedal - Brushed Stainless Steel',
    reviewStars : 45,
    reviewCount : 2286,
    price : 8300,
    quantity : 1,
    size : ['50L', '30L Tall']
  },
  {
    image : ['images/duvet-cover-set-blue-twin.jpg','images/duvet-cover-set-blue-queen.jpg','images/duvet-cover-set-red-twin.jpg','images/duvet-cover-set-red-queen.jpg'],
    name : 'Duvet Cover Set with Zipper Closure',
    reviewStars : 40,
    reviewCount : 456,
    price : 2399,
    quantity : 1,
    color : ['Blue','Red'],
    size : ['Twin', 'Queen']
  },
  {
    image : ['images/women-chunky-beanie-gray.webp'],
    name : "Women's Chunky Cable Beanie - Gray",
    reviewStars : 50,
    reviewCount : 83,
    price : 1250,
    quantity : 1
  },
  {
    image : ['images/men-chino-pants-beige.jpg','images/men-chino-pants-green.jpg','images/men-chino-pants-black.jpg'],
    name : "Men's Classic-fit Pleated Chino Pants",
    reviewStars : 45,
    reviewCount : 9017,
    price : 2290,
    quantity : 1,
    color : ['Beige','Green','Black'],
    size : [30,31,32]
  },
  {
    image : ['images/men-athletic-shoes-green.jpg','images/men-athletic-shoes-black.jpg'],
    name : "Men's Athletic Sneaker",
    reviewStars : 40,
    reviewCount : 229,
    price : 3890,
    quantity : 1,
    color : ['Green','Black'],
    size : [9,10,11,12]
  },
  {
    image : ['images/men-navigator-sunglasses-brown.jpg','images/men-navigator-sunglasses-silver.jpg'],
    name : "Men's Navigator Sunglasses Pilot",
    reviewStars : 35,
    reviewCount : 42,
    price : 1690,
    quantity : 1,
    color : ['Brown','Silver']
  },
  {
    image : ['images/non-stick-cooking-set-15-pieces.webp'],
    name : 'Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces',
    reviewStars : 45,
    reviewCount : 511,
    price : 6797,
    quantity : 1
  },
  {
    image : ['images/vanity-mirror-silver.jpg'],
    name : 'Vanity Mirror with Heavy Base - Chrome',
    reviewStars : 45,
    reviewCount : 130,
    price : 1649,
    quantity : 1
  },
  {
    image : ['images/women-french-terry-fleece-jogger-camo.jpg','images/women-french-terry-fleece-jogger-gray.jpg'],
    name : "Women's Fleece Jogger Sweatpant",
    reviewStars : 45,
    reviewCount : 248,
    price : 2400,
    quantity : 1,
    color : ['Camo','Gray'],
    size : ['S','M','L']
  },
  {
    image : ['images/double-elongated-twist-french-wire-earrings.webp'],
    name : 'Double Oval Twist French Wire Earrings - Gold',
    reviewStars : 45,
    reviewCount : 117,
    price : 2400,
    quantity : 1
  },
  {
    image : ['images/round-airtight-food-storage-containers.jpg'],
    name : 'Round Airtight Food Storage Containers - 5 Piece',
    reviewStars : 40,
    reviewCount : 126,
    price : 2899,
    quantity : 1
  },
  {
    image : ['images/coffeemaker-with-glass-carafe-black.jpg'],
    name : 'Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz,...',
    reviewStars : 45,
    reviewCount : 1211,
    price : 2250,
    quantity : 1
  },
  {
    image : ['images/blackout-curtains-black.jpg'],
    name : 'Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels',
    reviewStars : 45,
    reviewCount : 363,
    price : 3099,
    quantity : 1
  },
  {
    image : ['images/cotton-bath-towels-teal.webp'],
    name : '100% Cotton Bath Towels - 2 Pack, Light Teal',
    reviewStars : 45,
    reviewCount : 93,
    price : 2110,
    quantity : 1
  },
  {
    image : ['images/knit-athletic-sneakers-pink.webp'],
    name : 'Waterproof Knit Athletic Sneakers - Pink',
    reviewStars : 40,
    reviewCount : 89,
    price : 3390,
    quantity : 1,
    size : [6,7,8,9]
  },
  {
    image : ['images/countertop-blender-64-oz.jpg'],
    name : 'Countertop Blender - 64oz, 1400 Watts',
    reviewStars : 40,
    reviewCount : 3,
    price : 10747,
    quantity : 1
  },
  {
    image : ['images/floral-mixing-bowl-set.jpg'],
    name : '10-Piece Mixing Bowl Set with Lids - Floral',
    reviewStars : 50,
    reviewCount : 679,
    price : 3899,
    quantity : 1
  },
  {
    image : ['images/kitchen-paper-towels-30-pack.jpg'],
    name : '2-Ply Kitchen Paper Towels - 30 Pack',
    reviewStars : 45,
    reviewCount : 1045,
    price : 5799,
    quantity : 1
  },
  {
    image : ['images/men-cozy-fleece-zip-up-hoodie-red.jpg','images/men-cozy-fleece-zip-up-hoodie-black.jpg'],
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
let placedOrders = [];
let orderToTrack = [];
let timeoutID;

try {

  if(localStorage.getItem('placedOrdersLS') !== null) {
    
    placedOrders = JSON.parse(localStorage.getItem('placedOrdersLS'));
  
    // let placedOrdersItemCount = 0;
        
    // placedOrders.forEach((product, prodIndex) => {
  
    //   if(product.quantity > 0) {
  
    //     placedOrdersItemCount += parseInt(product.quantity);
  
    //   }
    // });
    
    // if(placedOrdersItemCount <= 9) {
    
    //   placedOrdersItemCountElement.innerHTML = placedOrdersItemCount;
  
    // } else {
  
    //   placedOrdersItemCountElement.innerHTML = '9+';
    //   placedOrdersItemCountElement.classList.add('placedOrdersItemCountMoreThan9');
  
    // }
  
  
  }

} catch(exception) {
  //No order placed
}

try {

  if(localStorage.getItem('cartLS') !== null) {
    
    cart = JSON.parse(localStorage.getItem('cartLS'));
  
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
  
  
  }

} catch(exception) {
  //No order in cart
}

try {

  if(localStorage.getItem('orderToTrackLS') !== null) {

    orderToTrack = JSON.parse(localStorage.getItem('orderToTrackLS'));

  }

} catch(exception) {
  //No order to track
}

function updateDate(dateToUpdate, operationType, operationUnit, updateByValue) {

  const result = new Date(dateToUpdate);

  if(operationUnit.toLowerCase() === 'days' || operationUnit.toLowerCase() === 'day') {

    if(operationType === '+') {

      result.setDate(result.getDate() + updateByValue);

    } else if(operationType === '-') {

      result.setDate(result.getDate() - updateByValue);

    }

  } else if(operationUnit.toLowerCase() === 'months' || operationUnit.toLowerCase() === 'month') {

    if(operationType === '+') {

      result.setDate(result.getMonth() + updateByValue);

    } else if(operationType === '-') {

      result.setDate(result.getMonth() - updateByValue);

    }

  } else if(operationUnit.toLowerCase() === 'years' || operationUnit.toLowerCase() === 'year') {

    if(operationType === '+') {

      result.setDate(result.getFullYear() + updateByValue);

    } else if(operationType === '-') {

      result.setDate(result.getFullYear() - updateByValue);

    }

  }

  return result;

}

function formatDate(dateToFormat, weekdayOption, monthOption, dayOption) {

  const options = { weekday: weekdayOption, month: monthOption, day: dayOption };
  const formattedDate = dateToFormat.toLocaleDateString('en-US', options);
  
  return formattedDate;

}

// let dateToFormat = updateDate("2024-07-09", "+", "days", 3);
// console.log(dateToFormat);
// console.log(formatDate(dateToFormat, "long", "long", "numeric"));