// ProductsList.js
import React from 'react';
import './ProductsList.css';

const ProductsList = ({ products, deleteProduct }) => {
  return (
    <div className="products-list">
      <h2>PRODUCTS</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.title}</span>
            <span>${product.price}</span>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
