import { ProductActionTypes } from "../constants/ProductActionTypes";
export const setProducts = (products) => {
  return {
    type: ProductActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ProductActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
