import {createContext, useState} from "react";
import {Subscription} from "../models/Contract.ts";

export const SubscriptionsContext = createContext();
export  const SubContext  = createContext();

export function useSubscriptionsState(){
    let subscriptions :Subscription[];
    return useState(subscriptions);
}
export function useSubState(){
    let subscription:Subscription;
    return useState(subscription)
}