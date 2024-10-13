import "./App.css";
import Footer from "./components/footer/Footer";
// import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Pizza from "./components/home/pizza/Pizza";
// import Login from "./components/login/Login";
// import Register from "./components/login/Register";

function App() {
    return (
        <>
            <Navbar />
            <Pizza/>
            <Home />
            {/* <Cart/> */}
            {/* <Register /> */}
            {/* <Login/> */}
            <Footer />
        </>
    );
}

export default App;
