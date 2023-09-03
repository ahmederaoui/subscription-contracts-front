import { createContext, useState } from "react";
import {AuthData} from "../models/Agent.ts";

export const AuthContext = createContext<AuthData>();
export function useAuthState() {
    let authState: AuthData;
    return useState(authState);
}

