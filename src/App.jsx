import React from "react";
import { Routes, Route } from "react-router-dom";
// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Common Pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

// Auth Pages
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";

// Admin Pages
import Dashboard from "./components/admin/Dashboard";
import AdminLayout from "./components/admin/Adminlayout";

// Product Pages
import ProductList from "./components/products/ProductList";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";

// User Pages
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";

function App() {
  return (
    <div>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Admin routes with layout (Navbar, Sidebar, Footer) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/update/:id" element={<UpdateProduct />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/add" element={<UserForm />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;