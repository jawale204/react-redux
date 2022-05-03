import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/ProductActions";

function ProductListings() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const result = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("err", err));
    dispatch(setProducts(result.data));
  };
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListings;
