if(cart.length <= 9) {

  cartItemCountElement.innerHTML = cart.length;

} else {

  cartItemCountElement.innerHTML = "9+";

}

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

  showResult(searchResult);

}