if(localStorage.getItem('cartLS') !== null) {
  
  cart = JSON.parse(localStorage.getItem('cartLS'));

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
  localStorage.removeItem('cartLS');
  
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