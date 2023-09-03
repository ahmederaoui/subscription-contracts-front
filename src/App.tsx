import "./App.css";
import Wrapper from "./pages/public/Wrapper.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/public/Login.tsx";
import Register from "./pages/public/Register.tsx";
import QrCode from "./pages/public/QrCode.tsx";
import {AuthContext, AuthProvider, useAuthState} from "./contexts/AuthContext.ts";
import PrivateWrapper from "./pages/private/PrivateWrapper.tsx";
import Contracts from "./pages/private/Contracts.tsx";

function App() {
    const authState = useAuthState();
    return (
    <>
        <BrowserRouter>
            <AuthContext.Provider value={authState}>
            <Routes>
                <Route  element={<Wrapper></Wrapper>}>
                    <Route path={"/login"}  element={<Login/>} ></Route>
                    <Route path={"/register"} element={<Register/>}></Route>
                    <Route path={"/mfadata"} element={<QrCode/>}></Route>
                </Route>
                <Route path={"/"} element={<PrivateWrapper/>}>
                    <Route path={"/contracts"}  element={<Contracts/>} ></Route>
                </Route>
            </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
