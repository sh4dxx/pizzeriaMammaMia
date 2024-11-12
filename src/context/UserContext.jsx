import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(true);

    const logout = () => {
        setUserToken(false);
    };

    const userProviderValues = {
        userToken,
        logout,
    };

    return <UserContext.Provider value={userProviderValues}>{children}</UserContext.Provider>;
};
export default UserProvider;
