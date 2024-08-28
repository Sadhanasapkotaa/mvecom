import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="list-group">
      <Link to="/customer/dashboard">
        <li className="list-group-item">Dashboard</li>
      </Link>

      <Link to="/customer/orders">
        <li className="list-group-item">Orders</li>
      </Link>

      <Link to="/customer/wishlist">
        <li className="list-group-item">Seller</li>
      </Link>

      <Link to="/customer/profile">
        <li className="list-group-item">Profile</li>
      </Link>

      <Link to="/customer/password">
        <li className="list-group-item">Password</li>
      </Link>

      <Link to="/customer/address">
        <li className="list-group-item">Adress</li>
      </Link>

      <Link to="/customer/logout">
        <li className="list-group-item text-danger">Log Out</li>
      </Link>
    </ul>
  );
};

export default Sidebar;
