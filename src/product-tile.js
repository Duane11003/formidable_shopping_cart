import React from "react";
import PropTypes from "prop-types";
import AppContext from "./context";

const ProductTile = props => (
  <div>
    <div className="roundel" style={{ backgroundColor: props.product.color }} />
    <div className="title">{props.product.name}</div>
    <div className="price">
      ${(props.product.pricePerUnit / 100).toFixed(2)}
    </div>
  </div>
);

ProductTile.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    pricePerUnit: PropTypes.number,
    color: PropTypes.string
  })
};

export default ProductTile;
