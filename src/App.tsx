import "./App.css";
import Wrapper from "./pages/public/Wrapper.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/public/Login.tsx";
import Register from "./pages/public/Register.tsx";
import QrCode from "./pages/public/QrCode.tsx";
import PrivateWrapper from "./pages/private/PrivateWrapper.tsx";
import Contracts from "./pages/private/Contracts.tsx";
import RouteProtectedByRole from "./hooks/RouteProtectedByRole.tsx";
import Dashboard from "./pages/private/Dashboard.tsx";
import AddContract from "./pages/private/AddContract.tsx";
import {AgentContext, useAgentState} from "./contexts/AgentContext.ts";
import {SubContext, SubscriptionsContext, useSubscriptionsState, useSubState} from "./contexts/SubscriptionsContext.ts";
import {SubscriptionsSearchContext, useSubscriptionsSearchState} from "./contexts/SubscriptionsSearchContext.ts";
import ConsultContract from "./pages/private/ConsultContract.tsx";
import EditContract from "./pages/private/EditContract.tsx";
import Otp from "./pages/private/Otp.tsx";

function App() {
    const agentState = useAgentState();
    const subscriptionsState = useSubscriptionsState();
    const subscriptionsSearchState = useSubscriptionsSearchState();
    const subscriptionState = useSubState();
    return (
        <BrowserRouter>
            <AgentContext.Provider value={agentState}>
                <SubscriptionsContext.Provider value={subscriptionsState}>
                    <SubContext.Provider value={subscriptionState}>
                    <SubscriptionsSearchContext.Provider value={subscriptionsSearchState}>
                        <Routes>
                            <Route element={<Wrapper></Wrapper>}>
                                <Route path={"/login"} element={<Login/>}></Route>
                                <Route path={"/register"} element={<Register/>}></Route>
                                <Route path={"/mfadata"} element={<QrCode/>}></Route>
                            </Route>

                            <Route element={<PrivateWrapper/>}>
                                <Route element={<RouteProtectedByRole AllowRole={"BACKOFFICE"}/>}>
                                    <Route path={"/dashboard"} element={<Dashboard/>}></Route>
                                    <Route path={""} element={<Navigate to="/dashboard"/>}></Route>
                                    <Route path={"/"} element={<Navigate to="/dashboard"/>}></Route>
                                    <Route path={"/otp"} element={<Otp/>}/>
                                    <Route path={"/contracts"} element={<Contracts/>}></Route>
                                    <Route path={"/contracts/:id"} element={<ConsultContract/>}></Route>
                                    <Route path={"/contracts/edit/:id"} element={<EditContract/>}></Route>
                                    <Route path={"/contracts/addcontract"} element={<AddContract/>}></Route>
                                </Route>
                            </Route>
                        </Routes>
                    </SubscriptionsSearchContext.Provider>
                    </SubContext.Provider>
                </SubscriptionsContext.Provider>
            </AgentContext.Provider>
        </BrowserRouter>

    );
}

export default App;
