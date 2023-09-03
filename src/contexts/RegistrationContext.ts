import {createContext, useState} from "react";
import {MfaData} from "../models/Agent.ts";

export const MfaContext = createContext<MfaData>();
export function useMfaState(){
    let mfaData:MfaData;
    return useState(mfaData);
}