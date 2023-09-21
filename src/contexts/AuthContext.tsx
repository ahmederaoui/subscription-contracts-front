import { createContext, useState } from "react";
import {AuthData} from "../models/Agent.ts";

export const AuthContext = createContext({
    isAuthenticated : false,
    username : "",
    role:"",
    token:""
});
/*export function useAuthState() {

    return useState({
        isAuthenticated : false,
        username : "",
        role:"",
        token:""
    });
}*/

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState<AuthData>();
    return (
        <AuthContext.Provider value={{ auth, setAuth}}>
    {children}
    </AuthContext.Provider>
)
}

