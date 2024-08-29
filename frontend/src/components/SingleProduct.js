import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="card shadow">
        <Link to="/product/python-timer/123">
          <img src={logo} className="card-img-top" alt="..." />
        </Link>

        <div className="card-body">
          <Link to="/product/python-timer/123">
            <h5 className="card-title">{props.product.title}</h5>
          </Link>

          <h6 className="card-title text-muted">Price: Rs. {props.product.price}</h6>
        </div>

        <div className="card-footer">
          <button title="Add to Cart" className="btn btn-success btn-sm">
            <i title="Add to Wishlist" className="fa-solid fa-cart-plus"></i>
          </button>
          <button title="Add to Cart" className="btn btn-danger btn-sm ms-1">
            <i title="Add to Wishlist" className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
