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
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                       

                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="btn btn-sm btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            // aria-expanded="false"
                          >
                            Change Status
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Approved
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Sent
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Complete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>

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
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                       

                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="btn btn-sm btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            // aria-expanded="false"
                          >
                            Change Status
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Approved
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Sent
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Complete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>

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
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                       

                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="btn btn-sm btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            // aria-expanded="false"
                          >
                            Change Status
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Approved
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Sent
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Complete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>

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
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                       

                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="btn btn-sm btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            // aria-expanded="false"
                          >
                            Change Status
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Approved
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Sent
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Complete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>

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
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                       

                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="btn btn-sm btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            // aria-expanded="false"
                          >
                            Change Status
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Approved
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Sent
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Complete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorOrders;
