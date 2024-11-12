import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";
import UserProvider from "./context/UserContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </UserProvider>
        </BrowserRouter>
    </StrictMode>
);
