import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartState) => cartState.cartItems
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cartState) => cartState.cartTotal
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartState) => cartState.isCartOpen
);
