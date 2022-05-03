import { combineReducers } from "redux";
import { ProductsReducer, ProductReducer } from "./ProductReducers";
const reducers = combineReducers({
  allProducts: ProductsReducer,
  product: ProductReducer,
});

export default reducers;
