import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: "220px" }}>
      <h5>Admin Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/products/add">Add Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/users/add">Add User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
