 QUnit.module("Test add To Cart", {
	afterEach: function() {
	  myfunction.cart = [];
	}
 });
QUnit.test("myfunction.addNewProduct", function(assert){
	assert.expect(3);  
	var product = {
		id: 1,
		name: "Product Name 1"
	};
	myfunction.addNewProduct(product)  
	assert.equal(myfunction.cart.length, 1);
	assert.equal(myfunction.cart[0].id, 1);
	assert.equal(myfunction.cart[0].name, "Product Name 1");
}); 

//==========================
QUnit.module("Test other cart functions", {
  beforeEach: function() {
	  var product1 = {
		id: 1,
		quantity: 12,
		price: 1.45,
		name: "Product Name 1"
	 };
	 var product2 = {
		id: 1,
		quantity: 3,
		price: 1.50,
		name: "Product Name 2"
	 };
	 myfunction.addNewProduct(product1);
	 myfunction.addNewProduct(product2); 
  },
  afterEach: function()	{
	 myfunction.cart = []; 
  }
});
QUnit.test("myfunction.computeCart", function(assert){
	assert.expect(2);
	assert.equal(myfunction.cart.length, 2);
	assert.equal(myfunction.computeCart(), 21.9);
}); 

QUnit.test("myfunction.findProductInCart success", function(assert){
	assert.expect(1);
	var product = {
		name: "Product Name 1"
	};
	var result = myfunction.findProductInCart(product);  
	assert.equal(result.name, "Product Name 1");
}); 

QUnit.test("myfunction.findProductInCart no result", function(assert){
	assert.expect(1);
	var product = {
		name: "Product Name 3"
	};
	var result = myfunction.findProductInCart(product);  
	assert.equal(result, null);
});

//==========================
QUnit.module("Test async functions", {
  beforeEach: function() {
	  myfunction.cart = []; 
  },
  afterEach: function()	{
	 myfunction.cart = []; 
  }
});
QUnit.test("myfunction.addANewProductAfter5seconds", function(assert){ 
	var now = new Date().getTime() / 1000;
	var done = assert.async();
	myfunction.addANewProductAfter5seconds(function(){
		console.log(now);
		var expected = ((new Date().getTime() / 1000) - now).toFixed(0);
		assert.equal(myfunction.cart.length, 1);
		assert.equal(expected, 5);
		done();
	});
});
