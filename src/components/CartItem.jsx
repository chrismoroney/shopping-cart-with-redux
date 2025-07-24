import React from 'react';
import { useDispatch } from 'react-redux';
import { removeOneFromCart, removeAllFromCart } from '../redux/actions';

function CartItem({ product, quantity }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{product.name} (x{quantity})</span>
      <button onClick={() => dispatch(removeOneFromCart(product.id))}>Remove (x1)</button>
      <button onClick={() => dispatch(removeAllFromCart(product.id))}>Remove all</button>
    </div>
  );
}

export default CartItem;
