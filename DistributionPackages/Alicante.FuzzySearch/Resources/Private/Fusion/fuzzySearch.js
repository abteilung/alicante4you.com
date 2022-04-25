import List from "list.js";


var fuzzyList = 'searchBox',
	fuzzyOptions = {
		searchClass: "fuzzy-search",
		valueNames: ['nodeTitle', 'subTitle', 'teaser'],
		location: 0,
		distance: 100,
		threshold: 0.2,
		multiSearch: false
	};


document.addEventListener("fuzzyListLoaded", function (e) {
	var fuzzySearch = new List('searchBox', fuzzyOptions);

	fuzzySearch.on('searchStart', function (event) {
		document.getElementById('searchList').classList.remove('hidden');
	});

});




var productSearchOptions = {
	searchClass: "product-search",
	valueNames: ['nodeTitle', 'productID'],
	location: 0,
	distance: 100,
	threshold: 0.2,
	multiSearch: false
};

document.addEventListener("productSearchLoaded", function (e) {
	var productSearch = new List('productSearchBox', productSearchOptions);

	productSearch.on('searchStart', function (event) {
		input = document.getElementById('productSearch').value.length;
		if(input != undefined && input >= 1){
			document.getElementById('productList').classList.remove('hidden');
		}
	});
});





var productFilterOptions = {
	valueNames: [ 'title', 'productPrice', 'productWidth' ]
  };
  
  var userList = new List('productListing', productFilterOptions);