import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  return products.map((product) => {
    const { id, image, title, category, price } = product;
    return (
      <>
        <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <img
                  src={image}
                  alt={title}
                  width="250px"
                  height="250px"
                  className="image"
                />
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  });
}

export default ProductComponent;
