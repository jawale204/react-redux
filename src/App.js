import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListings from "./components/ProductListings";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProductListings />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route>404 not found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
