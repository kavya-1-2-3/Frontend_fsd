// src/services/userApi.js
import { v4 as uuidv4 } from "uuid";

// Mock user data
let users = [
  { id: uuidv4(), name: "Alice", email: "alice@example.com" },
  { id: uuidv4(), name: "Bob", email: "bob@example.com" },
];

// Simulated delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
  const newUser = { id: uuidv4(), ...user };
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
