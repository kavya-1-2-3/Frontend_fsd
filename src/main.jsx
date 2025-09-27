import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {AuthContextProvider} from './services/context/AuthContext';
import { Home } from "./home";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <AuthContextProvider>
        <Home></Home>
      </AuthContextProvider>
    </BrowserRouter>
);