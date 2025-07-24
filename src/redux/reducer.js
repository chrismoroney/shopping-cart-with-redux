import { ADD_TO_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART } from './actions';

const initialState = {
  cart: [], 
  total: 0, 
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existingItem = state.cart.find(item => item.product.id === product.id);
      if (existingItem) {
        return {
            ...state,
            cart: state.cart.map(item =>
                item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,

            ),
            total: state.total + product.price,
        };
      }
      return {
        ...state,
        cart: [...state.cart, { product, quantity: 1 }],
        total: state.total + product.price,
      };
    }
    case REMOVE_ONE_FROM_CART: {
        const productId = action.payload;
        const existingItem = state.cart.find(item => item.product.id === productId);
        if (existingItem) {
            if (existingItem.quantity > 1) {
            return {
                ...state,
                cart: state.cart.map(item =>
                item.product.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
                total: state.total - existingItem.product.price, 
            };
            }
            // Remove item if quantity is 1
            return {
            ...state,
            cart: state.cart.filter(item => item.product.id !== productId),
            total: state.total - existingItem.product.price, 
            };
        }
        return state;
    }
    case REMOVE_ALL_FROM_CART: {
      const productId = action.payload;
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== productId),
        total: state.cart
            .filter(item => item.product.id !== productId)
            .reduce((total, item) => total + item.product.price * item.quantity, 0)
        };
    }
    default:
      return state;
  }
}

export default reducer;
