app.service('ProductService', function($http){
	const products = [
		{id: 1, name: 'Hair Spray'},
		{id: 2, name: 'Shampoo'},
		{id: 3, name: 'Conditioner' },
	];

	// once backend is plugged in we'll be fetching these
	const fetchProducts = () => {
		return Promise.resolve(products);
	}

	const deleteProduct = (id) => {
		// angular.copy
		let newArr = products.filter(product => product.id === id);
		angular.copy(newArr, products);
	}

	const modifyProduct = (changes) => {
		let newArr = products.map(product => product.id !== changes.id ? product : {...product, ...changes});
		angualar.copy(newArr, products)
	}

	return {
		products,
		fetchProducts,
	}
});