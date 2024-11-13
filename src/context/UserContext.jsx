import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logout = () => {
        localStorage.setItem("token", null);
        setUserToken(false);
        setEmail("")
    };

    // const handleCheckout = () => {
    //     await fetch("http://localhost:5000/api/checkout", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer token_jwt`,
    //         },
    //         body: JSON.stringify({
    //         cart: carrito,
    //         }),
    //         });
    // };

    const handleSubmitLogin = async () => {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password,
        });
        localStorage.setItem("token", response.data.token);
        setUserToken(true);
        setEmail(email)
    };

    const handleSubmitRegister = async () => {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
            email,
            password,
        });
        localStorage.setItem("token", response.data.token);
        setUserToken(true);
        setEmail(email)
    };

    const userProviderValues = {
        userToken,
        logout,
        email,
        password,
        setEmail,
        setPassword,
        handleSubmitLogin,
        handleSubmitRegister,
    };

    return <UserContext.Provider value={userProviderValues}>{children}</UserContext.Provider>;
};
export default UserProvider;
