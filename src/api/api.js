// src/services/api.js

// Simulated delay for async calls
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock data
let products = [
  { id: 1, name: "Laptop", price: 75000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// Products API
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
  const newProduct = { id: products.length + 1, ...product };
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

// Users API
export const getUsers = async () => {
  await delay(300);
  return [...users];
};

export const getUserById = async (id) => {
  await delay(200);
  return users.find((u) => u.id === id);
};

export const addUser = async (user) => {
  await delay(200);
  const newUser = { id: users.length + 1, ...user };
  users.push(newUser);
  return newUser;
};

export const updateUser = async (id, updatedUser) => {
  await delay(200);
  users = users.map((u) => (u.id === id ? { ...u, ...updatedUser } : u));
  return users.find((u) => u.id === id);
};

export const deleteUser = async (id) => {
  await delay(200);
  users = users.filter((u) => u.id !== id);
  return true;
};
