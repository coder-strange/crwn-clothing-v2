import { CART_ACTION_TYPES } from "./cart.action";

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0,
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_CART_ITEM: {
      const alreadyExistIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id == payload.id
      );
      const updatedCartItems = [...state.cartItems];

      if (alreadyExistIndex > -1) {
        updatedCartItems[alreadyExistIndex] = {
          ...payload,
          quantity: ++updatedCartItems[alreadyExistIndex].quantity,
        };
      } else {
        updatedCartItems.push({
          ...payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        cartItems: updatedCartItems,
        cartTotal: updatedCartItems.reduce(
          (prev, curr) => prev + curr.price * curr.quantity,
          0
        ),
      };
    }
    case CART_ACTION_TYPES.REMOVE_CART_ITEM: {
      const alreadyExistIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id == payload.id
      );
      const updatedCartItems = [...state.cartItems];

      if (
        alreadyExistIndex > -1 &&
        updatedCartItems[alreadyExistIndex].quantity > 1
      ) {
        updatedCartItems[alreadyExistIndex] = {
          ...payload,
          quantity: --updatedCartItems[alreadyExistIndex].quantity,
        };
      } else if (alreadyExistIndex > -1) {
        updatedCartItems.splice(alreadyExistIndex, 1);
      }
      return {
        ...state,
        cartItems: updatedCartItems,
        cartTotal: updatedCartItems.reduce(
          (prev, curr) => prev + curr.price * curr.quantity,
          0
        ),
      };
    }

    case CART_ACTION_TYPES.CLEAR_CART_ITEM: {
      const updatedCartItems = state.cartItems.filter(
        (carItem) => payload.id != carItem.id
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        cartTotal: updatedCartItems.reduce(
          (prev, curr) => prev + curr.price * curr.quantity,
          0
        ),
      };
    }
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      return state;
  }
};
