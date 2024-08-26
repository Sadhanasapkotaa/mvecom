import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./Sidebar";

const Wishlist = () => {
  <section className="container">
    <div className="row">
      <div className="col-md-3 col-12 mb-2">
        <Sidebar />
      </div>
      <div className="col-md-9 col-12 mb-2">
        <div className="row">
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
  </section>;
};

export default Wishlist;
