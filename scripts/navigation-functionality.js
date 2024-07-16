if(cart.length <= 9) {

  cartItemCountElement.innerHTML = cart.length;

} else {

  cartItemCountElement.innerHTML = "9+";

}

searchBoxElement.addEventListener('keydown', (event) => {

  if(event.key === 'Enter') {

    if(window.location.href.includes('home-page')) {

      productListingElement.innerHTML = '';
      searchButtonAction(products);
  
    } else {
  
      searchButtonAction(products);
      window.location.href = 'home-page.html';
  
    }
  }
  
});

searchButtonElement.addEventListener('click', () => {

  if(window.location.href.includes('home-page')) {

    productListingElement.innerHTML = '';
    searchButtonAction(products);

  } else {

    searchButtonAction(products);
    window.location.href = 'home-page.html';

  }

});

// amazonLogo.addEventListener('click', () => {

//   cart = [];
//   placedOrders = [];
//   localStorage.removeItem('cartLS');
//   localStorage.removeItem('placedOrdersLS');
  
// });

function searchButtonAction(searchData) {

  searchResult = [];
  let searchKeyword = searchBoxElement.value;

  searchData.forEach((value) => {
    if(value.name.toLowerCase().includes(searchKeyword.toLowerCase())){
      
      searchResult.push(value);

    }
  });

  // searchBoxElement.value = searchKeyword;
  if(window.location.href.includes('home-page')) {

    showResult_HomePage(searchResult);
    searchResult = [];
    localStorage.removeItem('searchResultLS');

  } else {

    window.location.href = 'home-page.html';

  }

  localStorage.setItem('searchResultLS', JSON.stringify(searchResult));

}