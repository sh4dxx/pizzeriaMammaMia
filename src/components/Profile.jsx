import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {

    const { email, logout } = useContext(UserContext);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Profile</h5>
                                <label htmlFor="formInput">Email</label>
                                <input className="form-control" placeholder="Email" disabled id="formInput" type="text" value={email}></input>
                                <br />
                                <div className="d-grid gap-2 col-4 mx-auto">
                                    <button className="btn btn-primary" type="button" onClick={logout}>
                                        Cerrar session
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
