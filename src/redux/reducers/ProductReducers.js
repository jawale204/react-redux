import { ProductActionTypes } from "../constants/ProductActionTypes";
const initialState = {
  products: [],
};

export const ProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const ProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SELECTED_PRODUCT:
      return { ...payload };
    case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
