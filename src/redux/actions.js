export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART';
export const  REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeOneFromCart = (productId) => ({
    type: REMOVE_ONE_FROM_CART,
    payload: productId,
});

export const removeAllFromCart = (productId) => ({
    type: REMOVE_ALL_FROM_CART,
    payload: productId,
});