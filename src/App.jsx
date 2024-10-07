import "./App.css";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
// import Login from "./components/login/Login";
// import Register from "./components/login/Register";

function App() {
    return (
        <>
            <Navbar />
            <Cart/>
            {/* <Home /> */}
            {/* <Register /> */}
            {/* <Login/> */}
            <Footer />
        </>
    );
}

export default App;
