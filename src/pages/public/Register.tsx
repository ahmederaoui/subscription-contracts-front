import {Alert, Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useContext, useEffect, useRef, useState} from "react";
import {MdNotificationImportant} from "react-icons/md";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Agent, MfaData} from "../../models/Agent.ts";
import {axiosPublic} from "../../api/Axios.ts";
import {useNavigate} from "react-router-dom";
import {AxiosResponse} from "axios";
import {MfaContext} from "../../contexts/RegistrationContext.ts";

function Register() {
    const fnRef = useRef();
    const navigate = useNavigate();

    const [mfaState,setMfaState]=useContext<MfaData>(MfaContext);

    const  PWD_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [errMsg, setErrMsg] = useState<string>('');

    const [fn, setfn] = useState<string>('');
    const [validfn, setValidfn] = useState<boolean>(false);

    const [ln, setln] = useState<string>('');
    const [validln, setValidln] = useState<boolean>(false);

    const [email, setemail] = useState<string>('');
    const [validemail, setValidemail] = useState<boolean>(false);

    const [phone, setphone] = useState<string>('');
    const [validphone, setValidphone] = useState<boolean>(false);

    const [agency, setagency] = useState<string>('');
    const [validagency, setValidagency] = useState<boolean>(false);


    const [pwd, setPwd] = useState<string>('');
    const [validPwd, setValidPwd] = useState<boolean>(false);
    const [pwdFocus, setPwdFocus] = useState<boolean>(false);

    const [matchPwd, setMatchPwd] = useState<string>('');
    const [validMatch, setValidMatch] = useState<boolean>(false);
    useEffect(() => {
        fnRef.current.focus();
    }, [])
    useEffect(() => {
        setValidfn(fn.length >=3 && fn.length <=25);
    }, [fn])

    useEffect(() => {
        setValidln(ln.length >=3 && ln.length <=25);
    }, [ln])
    useEffect(() => {
        setValidemail(EMAIL_REGEX.test(email));
    }, [email])
    useEffect(() => {
        setValidphone(phone.length >=8);
    }, [phone])
    useEffect(() => {
        setValidagency(agency.length >=3 && agency.length <=25);
    }, [agency])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    const hundleSubmit=async (e)=>{
        e.preventDefault();
        if (validfn && validln && validemail && validagency && validphone && validPwd && validMatch){
            try {
                let agent:Agent ={

                } ;
                agent.firstname = fn;
                agent.lastname=ln;
                agent.agency=agency
                agent.email=email;
                agent.phone=phone;
                agent.password=pwd
                const res:AxiosResponse<MfaData> =await axiosPublic.post<MfaData>("/USERS-SERVICE/api/agents/create", agent);
                setMfaState(res.data);
                console.log(mfaState)
                navigate("/mfadata")

            }catch (err){
                setErrMsg(err.message);
            }
        }else{
            const err:string = "Some information is messing";
            setErrMsg(err);
            throw error(err)
        }
       
    }
    
    return (
        <>
            <div className={"rounded shadow-lg px-5 py-3 "}>
                <Row className={errMsg?"d-flex justify-content-center":"d-none"}><Col xs={12}>
                    <Alert   variant={"danger text-center"}>
                        {errMsg}
                    </Alert>
                </Col></Row>
                <Row><Col xs={{ span: 6, offset: 3 }}>
                    <div className={"mb-3 d-flex justify-content-center"}> <h1 className={"text-primary"}>Sign up</h1></div>
                </Col></Row>
                <Form onSubmit={()=>hundleSubmit(event)}>
                    <Row>
                        <Col md={6} xs={12}><Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Firstname"
                                className="mb-1"
                            >
                                <Form.Control type="text"
                                              placeholder="name@example.com"
                                              required={true} minLength={3}
                                              maxLength={25}
                                              ref={fnRef}
                                              autoComplete="off"
                                              onChange={(e) => setfn(e.target.value)}
                                              value={fn}
                                              aria-invalid={validfn ? "false" : "true"}
                                              aria-describedby="uidnote"/>
                            </FloatingLabel>

                        </Form.Group></Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Lastname"
                                    className="mb-1"
                                >
                                    <Form.Control type="text" placeholder="password" required={true} minLength={3} maxLength={25}
                                                  autoComplete="off"
                                                  onChange={(e) => setln(e.target.value)}
                                                  value={ln}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-1"
                            >
                                <Form.Control type="email" placeholder="name@example.com" required={true}
                                              autoComplete="off"
                                              onChange={(e) => setemail(e.target.value)}
                                              value={email}/>
                            </FloatingLabel>

                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Phone"
                                className="mb-1"
                            >
                                <Form.Control type="number" placeholder="name@example.com" required={true} minLength={8} maxLength={12}
                                              autoComplete="off"
                                              onChange={(e) => setphone(e.target.value)}
                                              value={phone}/>
                            </FloatingLabel>

                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Agency"
                                className="mb-1"
                            >
                                <Form.Control type="text" placeholder="name@example.com" required={true} minLength={3} maxLength={25}
                                              autoComplete="off"
                                              onChange={(e) => setagency(e.target.value)}
                                              value={agency}/>
                            </FloatingLabel>

                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Password"
                                className="mb-1"
                            >
                                <Form.Control type="password" placeholder="name@example.com" required={true}
                                              onChange={(e) => setPwd(e.target.value)}
                                              value={pwd}
                                onFocus={()=>setPwdFocus(true)}
                                onBlur={()=>setPwdFocus(false)}/>
                            </FloatingLabel>
                            <Form.Text className={pwdFocus && !validPwd ? "" :"d-none"}  id="passwordHelpBlock" muted>
                                <small className={"text-primary"}><MdNotificationImportant />Your password must be 8-20 characters long, contain letters, numbers and characters,
                                    and must not contain spaces or emoji.</small>
                            </Form.Text>

                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Confirm your password"
                                className="mb-1"
                            >
                                <Form.Control type="password" placeholder="name@example.com" required={true}
                                              onChange={(e) => setMatchPwd(e.target.value)}
                                              value={matchPwd}/>
                            </FloatingLabel>

                        </Form.Group>
                    </Row>

                    <Row className="mx-1 my-3 ">
                        <Button className={validfn && validln && validemail && validagency && validphone && validPwd && validMatch?"":"disabled"} variant="primary text-white" type="submit">
                            LOGIN
                        </Button>
                    </Row>
                    <Row className="my-3 d-flex justify-content-center">
                        <small className="" >
                            Already have account,<a onClick={()=>navigate("/login")} className={"ms-1 pointer-event"}>login.</a>
                        </small>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default Register;