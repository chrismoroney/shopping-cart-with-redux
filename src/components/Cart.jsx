import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeOneFromCart, removeAllFromCart } from '../redux/actions';
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector(state => state.cart);
  const total = useSelector(state => state.total);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <div><h2>Your Cart is Empty</h2></div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(({ product, quantity }) => (
        <CartItem
          key={product.id}
          product={product}
          quantity={quantity}
          onRemove={() => dispatch(quantity > 1 ? removeOneFromCart(product.id) : removeAllFromCart(product.id))}
        />
      ))}
      <h3>Total: {total}</h3>
    </div>
  );

}

export default Cart;
