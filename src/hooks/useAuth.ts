import { useContext, useDebugValue } from "react";
import {AuthContext} from "../contexts/AuthContext.tsx";

const useAuth = () => {
    //useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;