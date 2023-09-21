import {createContext, useState} from "react";
import {Agent} from "../models/Agent.ts";

export const AgentContext = createContext<Agent>();

export function useAgentState(){
    let agent :Agent;
    return useState(agent);
}