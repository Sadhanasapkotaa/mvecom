import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="container m-4">
      <h3 className="mb-4">All Items (4)</h3>
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link to="/product/python-timer/123">
                      <img
                        src={logo}
                        className="img-thumbnail thumbnail"
                        width={80}
                        alt="..."
                      />
                      <p>Django Course</p>
                    </Link>
                  </td>
                  <td>Rs. 200</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link to="/product/python-timer/123">
                      <img
                        src={logo}
                        className="img-thumbnail thumbnail"
                        width={80}
                        alt="..."
                      />
                      <p>Django Course</p>
                    </Link>
                  </td>
                  <td>Rs. 200</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <Link to="/product/python-timer/123">
                      <img
                        src={logo}
                        className="img-thumbnail thumbnail"
                        width={80}
                        alt="..."
                      />
                      <p>Django Course</p>
                    </Link>
                  </td>
                  <td>Rs. 200</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <Link to="/product/python-timer/123">
                      <img
                        src={logo}
                        className="img-thumbnail thumbnail"
                        width={80}
                        alt="..."
                      />
                      <p>Django Course</p>
                    </Link>
                  </td>
                  <td>Rs. 200</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={2}>Total</th>
                  <th>Rs. 800</th>
                </tr>
                <tr>
                  <th colSpan={3} align="right">
                    <Link to="/products/" className="btn btn-secondary">
                      Continue Shopping
                    </Link>
                    <Link to="/" className="btn btn-success ms-1">
                      Proceed to Payment
                    </Link>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
