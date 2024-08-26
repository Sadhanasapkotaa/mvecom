import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center">
              <p>
                <i className="fa fa-check-circle text-success fa-3x"></i>
              </p>
              <h3 className="text-success">Thank you for the order!</h3>

              <Link to="" className="btn btn-small btn-success m-4">
                Homepage
              </Link>
              <Link to="" className="btn btn-small btn-primary">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
