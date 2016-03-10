var myfunction = {
    cart: [],    
    sum: function(a, b) {
        return a + b;
    },
    
    addNewProduct: function(product) {
		this.cart.push(product);	        
    },
    
	computeCart: function() {
		var cartTotal = 0;
		for (i = 0; i < this.cart.length; i++) {
			var itemTotal = this.cart[i].price * this.cart[i].quantity;
			cartTotal += itemTotal;
		}

		cartTotal = Math.round(cartTotal * 100) / 100;
        return cartTotal;
	},
    
    findProductInCart: function(product) {
		for (i = 0; i < this.cart.length; i++) {
			if (this.cart[i].name == product.name) {
				return product;
			}
		}
		return null;
	},
	
	addANewProductAfter5seconds: function(callback) {
		var that = this;
		console.log("please wait for 5 seconds !");
		setTimeout(function() {
			var newProduct = {
				name: "New Product"
			}
			that.addNewProduct.call(that, newProduct);
			console.log("a product has been added successfully!");
			if (callback) {
				callback();
			}
		}, 5000);
	}
}

