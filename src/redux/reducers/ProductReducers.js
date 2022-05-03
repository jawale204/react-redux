import { ProductActionTypes } from "../constants/ProductActionTypes";
const initialState = {
  products: [
    {
      id: 1,
      name: "rhal",
      post: "developer",
    },
  ],
};

const ProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default ProductReducers;
