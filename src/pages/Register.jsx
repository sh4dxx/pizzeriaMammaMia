import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ratificationPassword, setRatificationPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password || !ratificationPassword) {
            alert("Debes completar todos los campos");
            return;
        }

        if (password.length > 6) {
            alert("campo password es mayor a 6");
            return;
        }

        if (password !== ratificationPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        alert("formulario enviado");
        console.log(email, password, ratificationPassword);
        setEmail("");
        setPassword("");
        setRatificationPassword("");
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <section>
                        <div className="" style={{ width: 600 }}>
                            <div className="card-body">
                                <h3 className="card-title">Register</h3>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="" className="form-labe">
                                        Email
                                    </label>
                                    <input value={email} type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                                    <br />
                                    <label htmlFor="" className="form-labe">
                                        Password
                                    </label>
                                    <input value={password} type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}></input>
                                    <br />
                                    <label htmlFor="" className="form-labe">
                                        Ratification Password
                                    </label>
                                    <input value={ratificationPassword} type="password" className="form-control" onChange={(e) => setRatificationPassword(e.target.value)}></input>
                                    <br />
                                    <button type="submit" className="btn btn-primary">
                                        Registrar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
