app.service('ProductService', function($http){
	const products = [];

	// once backend is plugged in we'll be fetching these
	const fetchProducts = () => {
		return $http.get('/api/products')
						.then(res => res.data)
						.then(_products => {
							angular.copy(_products, products)
						})
						.catch(err => console.log(err));
	}

	const deleteProduct = (id) => {
		return $http.delete(`/api/products/${id}`)
		.then(res => res.data)
		.then(() => {
			let newArr = products.filter(product => product.id !== id);
			angular.copy(newArr, products)
		})
		.catch(err => console.log(err));
	}

	const modifyProduct = (changes) => {
		return $http.put(`/api/products/${changes.id}`, changes)
		.then(res => res.data)
		.then((_changes) => {
			let newArr = products.map(product => product.id !== changes.id ? product : {...product, ..._changes});
			angular.copy(newArr, products)
		})
		.catch(err => console.log(err));
	}

	const addProduct = (name) => {
		return $http.post('/api/products/', { name })
		.then(res => res.data)
		.then(_product => {
			products.push(_product);
		})
		.catch(err => console.log(err));
	}

	return {
		products,
		fetchProducts,
		deleteProduct,
		modifyProduct,
		addProduct,
	}
})
.run(function(ProductService){
	ProductService.fetchProducts();
})
