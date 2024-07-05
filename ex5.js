const filterProducts = function(products) {
    return products.filter(product => product.quantity > 0);
  };
  
  const products = [
    { name: 'Laptop', price: 1000, quantity: 5 },
    { name: 'Phone', price: 500, quantity: 0 },
    { name: 'Tablet', price: 300, quantity: 10 },
    { name: 'Monitor', price: 200, quantity: 0 }
  ];
  
 
  console.log(filterProducts(products));