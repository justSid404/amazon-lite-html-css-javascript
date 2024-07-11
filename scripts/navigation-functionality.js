if(cart.length <= 9) {

  cartItemCountElement.innerHTML = cart.length;

} else {

  cartItemCountElement.innerHTML = "9+";

}

searchBoxElement.addEventListener('keydown', (event) => {

  if(event.key === 'Enter') {

    // window.location.href = 'home-page.html';
    productListingElement.innerHTML = '';
    searchButtonAction(products);
  }
  
});

searchButtonElement.addEventListener('click', () => {

  // window.location.href = 'home-page.html';
  productListingElement.innerHTML = '';
  searchButtonAction(products);
});

amazonLogo.addEventListener('click', () => {

  cart = [];
  placedOrders = [];
  localStorage.removeItem('cartLS');
  localStorage.removeItem('placedOrdersLS');
  
});

function searchButtonAction(searchData) {

  let searchResult = [];
  let searchKeyword = searchBoxElement.value;

  searchData.forEach((value) => {
    if(value.name.toLowerCase().includes(searchKeyword.toLowerCase())){
      
      searchResult.push(value);

    }
  });

  // searchBoxElement.value = searchKeyword;

  showResult_HomePage(searchResult);

}