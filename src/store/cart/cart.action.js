import { createAction } from "../../utils/reducer/reducer.utils";

export const CART_ACTION_TYPES = {
  ADD_CART_ITEM: "cart/ADD_CART_ITEM",
  REMOVE_CART_ITEM: "cart/REMOVE_CART_ITEM",
  CLEAR_CART_ITEM: "cart/CLEAR_CART_ITEM",
  TOGGLE_CART_OPEN: "car/TOGGLE_CART_OPEN",
};

export const addCartItem = (product) =>
  createAction(CART_ACTION_TYPES.ADD_CART_ITEM, product);

export const removeCartItem = (product) =>
  createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM, product);

export const clearCartItem = (product) =>
  createAction(CART_ACTION_TYPES.CLEAR_CART_ITEM, product);

export const toggleCartOpen = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN);
