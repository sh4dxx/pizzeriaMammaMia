import { Link } from "react-router-dom";

export default function Navigation() {
    const total = 25000;
    const token = false;

    let totalFormat = total.toLocaleString("de-DE");
    let showLogin = token ? "btn btn-dark btn-blight" : "d-none";
    let showLogout = !token ? "btn btn-dark btn-blight" : "d-none";

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
                <div className="container">
                    <a className="navbar-brand ms-2" href="#">
                        Pizzería Mamma Mia!
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="btn btn-dark btn-blight">🍕Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className={showLogout}>🔐Login</Link>
                            </li>
                            <li className="nav-item">
                                {/* <div className={showLogout}>🔐Register</div> */}
                                <Link to="/register" className={showLogout}>🔐Register</Link>
                            </li>
                            <li className="nav-item">
                                {/* <div className={showLogin}>🔓Profile</div> */}
                                <Link to="/profile" className={showLogin}>🔓Profile</Link>
                            </li>
                            <li className="nav-item">
                                {/* <div className={showLogin}>🔒Logout</div> */}
                                <Link to="/profile" className={showLogin}>🔒Logout</Link>
                            </li>
                        </ul>
                        {/* <button className="btn btn-dark btn-bprymary">🛒Total ${totalFormat}</button> */}
                        <Link to="/cart" className="btn btn-dark btn-bprymary">🛒Total ${totalFormat}</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
