export default function Navbar() {
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
                                <div className="btn btn-dark btn-blight">🍕Home</div>
                            </li>
                            <li className="nav-item">
                                <div className={showLogout}>🔐Login</div>
                            </li>
                            <li className="nav-item">
                                <div className={showLogout}>🔐Register</div>
                            </li>
                            <li className="nav-item">
                                <div className={showLogin}>🔓Profile</div>
                            </li>
                            <li className="nav-item">
                                <div className={showLogin}>🔒Logout</div>
                            </li>
                            
                        </ul>
                        <button className="btn btn-dark btn-bprymary">🛒Total ${totalFormat}</button>
                    </div>
                </div>
            </nav>
        </>
    );
}
