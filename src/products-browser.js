import React from "react";
import AppContext from "./context";
import ProductTile from "./product-tile";

const ProductsBrowser = () => {
  const { products } = React.useContext(AppContext);
  return (
    <div className="products-browser">
      {products.map(product => (
        <ProductTile key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductsBrowser;
