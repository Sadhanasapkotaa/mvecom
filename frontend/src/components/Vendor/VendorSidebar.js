import React from "react";
import { Link } from "react-router-dom";

const VendorSidebar = () => {
  return (
    <ul className="list-group">
      <Link to="/vendor/dashboard">
        <li className="list-group-item">Vendor Dashboard</li>
      </Link>

      <Link to="/vendor/products">
        <li className="list-group-item">Products</li>
      </Link>

      <Link to="/vendor/add-product">
        <li className="list-group-item">Add Product</li>
      </Link>

      <Link to="/vendor/orders">
        <li className="list-group-item">Orders</li>
      </Link>

      <Link to="/vendor/cusomers">
        <li className="list-group-item">Customers</li>
      </Link>

      <Link to="/vendor/reports">
        <li className="list-group-item">Reports</li>
      </Link>

      <Link to="/vendor/password">
        <li className="list-group-item">Password</li>
      </Link>

      <Link to="/vendor/logout">
        <li className="list-group-item text-danger">Log Out</li>
      </Link>
    </ul>
  );
};

export default VendorSidebar;
