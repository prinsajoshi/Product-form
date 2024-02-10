// AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !productPrice) return;
    addProduct({
      id: Date.now(), // Use a unique ID for simplicity (not from the API)
      title: productName,
      price: parseFloat(productPrice)
    });
    setProductName('');
    setProductPrice('');
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
