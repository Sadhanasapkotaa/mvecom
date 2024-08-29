import React from "react";
import VendorSidebar from "./VendorSidebar";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const VendorOrders = () => {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <VendorSidebar />
                </div>
                <div className="col-md-8 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
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
                      <span className="text-success">
                        Completed <i className="fa fa-check-circle"></i>
                      </span>
                    </td>
                    <td>
                      <div className="btn btn-primary">Change Status</div>
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
                      <span className="text-secondary">
                        Processing <i className="fa fa-spin fa-spinner"></i>
                      </span>
                    </td>
                    <td>
                      {/* <div className="btn btn-primary">Download</div> */}
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
                      <span className="text-danger">
                        Completed <i className="fa fa-times-circle"></i>
                      </span>
                    </td>
                    <td>
                      {/* <div className="btn btn-primary">Download</div> */}
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
                      <span className="text-success">
                        Completed <i className="fa fa-check-circle"></i>
                      </span>
                    </td>
                    <td>
                      <div className="btn btn-primary">Download</div>
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


export default VendorOrders;
