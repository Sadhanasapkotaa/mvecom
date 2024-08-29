import React from "react";
import VendorSidebar from "./VendorSidebar";
import { Link } from "react-router-dom";

const VendorProducts = () => {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <VendorSidebar />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="row">
            <h3>Product List</h3>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td colSpan={5} align="right">
                    <Link to="" className="btn btn-info float-end mb-2">
                      <i className="fa fa-plus-circle"></i> Add Product
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Product Title</td>
                  <td>500</td>
                  <td>Published</td>
                  <td>
                    <Link to="#" className="btn btn-info">
                      View
                    </Link>
                    <Link to="#" className="btn btn-primary ms-1">
                      Edit
                    </Link>
                    <Link to="#" className="btn btn-danger ms-1">
                      Delete
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorProducts;
