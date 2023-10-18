import {
  ADD_TO_CART,
  ADD_TO_PRODUCTDETAIL,
  DECREASE_ITEM,
  DECREASE_PRODUCTDETAIL,
  INCREASE_ITEM,
  INCREASE_PRODUCTDETAIL,
  REMOVE_FROM_CART,
} from './ActionTypes';

export const addToCart = cartData => ({
  type: ADD_TO_CART,
  payload: cartData,
});
export const addToProductDetail = cartData => ({
  type: ADD_TO_PRODUCTDETAIL,
  payload: cartData,
});
export const removeItem = itemId => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
export const increaseItem = itemId => ({
  type: INCREASE_ITEM,
  payload: itemId,
});
export const increaseProductDetail = itemId => ({
  type: INCREASE_PRODUCTDETAIL,
  payload: itemId,
});
export const decreaseProductDetail = itemId => ({
  type: DECREASE_PRODUCTDETAIL,
  payload: itemId,
});
export const decreaseItem = itemId => ({
  type: DECREASE_ITEM,
  payload: itemId,
});
