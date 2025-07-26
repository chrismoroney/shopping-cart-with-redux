import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart }  from '../features/cart/cartSlice';

function ProductList({ products }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
