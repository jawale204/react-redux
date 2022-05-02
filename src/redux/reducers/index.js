import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";
const reducers = combineReducers({
  allProducts: ProductReducer,
});

export default reducers;
