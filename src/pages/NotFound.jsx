import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-info" role="alert">
                            <h1>404 NOT FOUND</h1>
                            <p>No fue posible encontrar la ruta seleccionada, pulse sobre el botón para volver al home.</p>
                                <Link to="/" className="btn btn-dark btn-lg">
                                    🍕Home
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
