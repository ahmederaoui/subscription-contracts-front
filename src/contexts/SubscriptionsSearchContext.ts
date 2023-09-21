import {createContext, useState} from "react";
import {ClientSegment, ContractStatus, ContractType} from "../models/Contract.ts";

export const SubscriptionsSearchContext = createContext();

export function useSubscriptionsSearchState(){
    return useState({
        agency : "",
        contractStatus:"REGISTERED",
        contractType:"TYPE1",
        clientSegment:"INDIVIDUAL",
        id:"",
        page:0,
        size:10,
        pagesNum:1
    });
}