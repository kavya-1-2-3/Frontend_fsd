// src/services/productApi.js
import { v4 as uuidv4 } from "uuid";

// Mock product data
let products = [
  { id: uuidv4(), name: "Laptop", price: 75000 },
  { id: uuidv4(), name: "Headphones", price: 3000 },
  { id: uuidv4(), name: "Keyboard", price: 1500 },
];

// Simulated delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async () => {
  await delay(300);
  return [...products];
};

export const getProductById = async (id) => {
  await delay(200);
  return products.find((p) => p.id === id);
};

export const addProduct = async (product) => {
  await delay(200);
  const newProduct = { id: uuidv4(), ...product };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = async (id, updatedProduct) => {
  await delay(200);
  products = products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p));
  return products.find((p) => p.id === id);
};

export const deleteProduct = async (id) => {
  await delay(200);
  products = products.filter((p) => p.id !== id);
  return true;
};
