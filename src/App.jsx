import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">

                    {/* <Home /> */}
                    {/* <Register /> */}
                    <Login/>
                
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
