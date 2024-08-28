import React from "react";
import Sidebar from "./Sidebar";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Wishlist = () => {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                    <div className="col-md-8 col-12">
                    <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
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
                    <td>
                      <div className="btn btn-danger">Remove</div>
                    </td>
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
                    <td>
                      <div className="btn btn-danger">Remove</div>
                    </td>
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
                    <td>
                      <div className="btn btn-danger">Remove</div>
                    </td>
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
                    <td>
                      <div className="btn btn-danger">Remove</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
                    </div>
                </div>
    </section >
  );
};



export default Wishlist;
