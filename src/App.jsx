import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/NotFound";
import Profile from "./components/Profile";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/"             element={<Home />} />
                <Route path="/register"     element={<Register />} />
                <Route path="/login"        element={<Login />} />
                <Route path="/cart"         element={<Cart />} />
                <Route path="/pizza/p001"   element={<Pizza />} />
                <Route path="/profile"      element={<Profile />} />
                <Route path="/404"          element={<NotFound />} />
                <Route path="*"             element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
