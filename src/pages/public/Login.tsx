import {Alert, Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import {axiosPublic} from "../../api/Axios.ts";
import jwtDecode from "jwt-decode";
import useAuth from "../../hooks/useAuth.ts";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";
import {AgentContext} from "../../contexts/AgentContext.ts";
import {Agent} from "../../models/Agent.ts";


function Login(){
    const [errMsg, setErrMsg] = useState<string>('');

    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const emailRef = useRef();

    const [email, setEmail] = useState<string>('');
    const [validEmail, setValidEmail] = useState<boolean>(false);

    const [pwd, setPwd] = useState<string>('');
    const [validPwd, setValidPwd] = useState<boolean>(false);

    const [totp, setTotp] = useState<string>('');
    const [validTotp, setValidtotp] = useState<boolean>(false);

    const axios = useAxiosPrivate();
    const [agentState,setAgentState] = useContext(AgentContext);

    useEffect(()=>{
        emailRef.current.focus();

    },[])
    useEffect(()=>{
        console.log(auth)
        setValidEmail(email.length>5);
    },[email])
    useEffect(()=>{
        setValidPwd(pwd.length>8);
    },[pwd])
    useEffect(()=>{
        setValidtotp(totp.length == 6)
    },[totp])


    const hundleLogin =async (e: Event)=>{
        e.preventDefault();
        try {
            const res = await axiosPublic.post("/SECURITY-SERVICE/api/v1/token",{
                username : email,
                password: pwd
            })
            if(!res.data.accessToken) throw Error("Email or password is incorrect")
            const decodedJWT= jwtDecode(res.data.accessToken);
            setAuth({...auth,
                isAuthenticated: true,
                username:decodedJWT.sub,
                role : decodedJWT.scope,
            token : res.data.accessToken});
            if (auth?.isAuthenticated){
                const response = await axios.get<Agent>(`USERS-SERVICE/api/agents/email/${auth?.username}`)
                setAgentState(response.data)
                navigate(from, { replace: true });
            }

        }catch (error){
            setAuth({...auth,
                isAuthenticated : false,
                username :null,
                role : null,
                token : null})
            setErrMsg(error.message);
        }
        console.log(auth)
    }

    return (
        <>
            <div className={"rounded px-5 py-3 shadow-lg"} onClick={()=>setErrMsg("")}>
                <Row  className={errMsg?"d-flex justify-content-center":"d-none"} ><Col xs={12}>
                    <Alert    variant={"danger text-center"}>
                        {errMsg}
                    </Alert>
                </Col></Row>
                <Row><Col xs={{ span: 6, offset: 3 }}>
                    <div className={"mb-3 d-flex justify-content-center"}> <h1 className={"text-primary"}>Login</h1></div>
                </Col></Row>
                    <Form onSubmit={()=> hundleLogin(event)}>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-1"
                                >
                                    <Form.Control type="email"
                                                  placeholder="name@example.com"
                                                  ref={emailRef}
                                                  onChange={(e) => setEmail(e.target.value)}
                                                  value={email}/>
                                </FloatingLabel>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="password"
                                    className="mb-1"
                                >
                                    <Form.Control type="password"
                                                  placeholder="password"
                                                  onChange={(e) => setPwd(e.target.value)}
                                                  value={pwd}/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="TOTP"
                                    className="mb-1"
                                >
                                    <Form.Control type="number"
                                                  placeholder="000000"
                                                  maxLength={6}
                                                  minLength={6}
                                                  onChange={(e) => setTotp(e.target.value)}
                                                  value={totp}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>

                        <Row className="mx-1 my-3 ">
                            <Button className={validEmail && validPwd && validTotp ?"":"disabled"} variant="primary text-white" type="submit">
                                Login
                            </Button>
                        </Row>
                        <Row className="my-3 d-flex justify-content-center">
                            <small className="" >
                                You don't have account,<a style={{cursor:"pointer"}} onClick={()=>navigate("/register")} className={"ms-1"} >sign up.</a>
                            </small>
                        </Row>
                    </Form>

            </div>
        </>
    )
}

export default Login;