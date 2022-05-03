import { ProductActionTypes } from "../constants/ProductActionTypes";
const initialState = {
  products: [],
};

const ProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default ProductReducers;
