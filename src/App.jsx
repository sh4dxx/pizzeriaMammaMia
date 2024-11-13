import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./components/Profile";
import Footer from "./components/footer/Footer";

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function App() {
    const { userToken } = useContext(UserContext);

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={!userToken ? <Register /> : <Navigate to="/" />} />
                <Route path="/login" element={!userToken ? <Login /> : <Navigate to="/" />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route path="/profile" element={userToken ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
