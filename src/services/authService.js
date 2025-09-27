// src/services/authService.js

// Simulated delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock user credentials
const mockUsers = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "user@example.com", password: "user123", role: "user" },
];

export const login = async (email, password) => {
  await delay(300);
  const user = mockUsers.find((u) => u.email === email && u.password === password);
  if (user) {
    return { email: user.email, role: user.role, token: "fake-jwt-token" };
  } else {
    throw new Error("Invalid email or password");
  }
};

export const signup = async (name, email, password) => {
  await delay(300);
  // For mock, we just return success; no persistence
  return { name, email, role: "user", token: "fake-jwt-token" };
};
