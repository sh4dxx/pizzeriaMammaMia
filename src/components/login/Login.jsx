import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            alert("Debes completar todos los campos");
            return;
        }

        if (password.length > 6) {
            alert("campo password es mayor a 6");
            return;
        }

        alert("formulario enviado");
        setEmail("");
        setPassword("");
    }
    return (
        <>
            <section>
                <div className="" style={{ width: 600 }}>
                    <div className="card-body">
                        <h3 className="card-title">Login</h3>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="" className="form-labe">
                                Email:
                            </label>
                            <input value={email} type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                            <label type="text"><span id="email-error"></span></label>
                            <br />
                            <label htmlFor="" className="form-labe">
                                Password:
                            </label>
                            <input value={password} type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}></input>
                            <label type="text"><span id="password-error"></span></label>
                            <br />
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}