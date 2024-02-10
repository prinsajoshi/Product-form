import React, { useState, useEffect } from 'react';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data when the component mounts
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data?.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductsList products={products} deleteProduct={deleteProduct} />
      <button onClick={clearProducts}>Clear All Products</button>
    </div>
  );
};

export default App;
