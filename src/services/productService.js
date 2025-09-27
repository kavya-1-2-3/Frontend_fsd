// src/services/productService.js
import * as productApi from "./productApi";

// This service wraps productApi and could later include extra logic (validation, caching, etc.)
export const fetchProducts = () => productApi.getProducts();
export const fetchProductById = (id) => productApi.getProductById(id);
export const createProduct = (product) => productApi.addProduct(product);
export const editProduct = (id, product) => productApi.updateProduct(id, product);
export const removeProduct = (id) => productApi.deleteProduct(id);
