import {Alert, Button, Card, Col, FloatingLabel, Form, Row, Spinner} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {SubContext} from "../../contexts/SubscriptionsContext.ts";
import {AgentContext} from "../../contexts/AgentContext.ts";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";
import {GrValidate} from "react-icons/gr";
import {useNavigate} from "react-router-dom";

function Otp() {
    const [otp,setOtp]=useState('');
    const [valid,setValid]=useState<boolean>(false);
    const [success,setSuccess]=useState<boolean>(false);
    const [subscriptionState,setSubscriptionState] = useContext(SubContext)
    const [agentState] = useContext(AgentContext);
    const navigate = useNavigate();
    const axios = useAxiosPrivate();

    useEffect(()=>{
        if(otp.length==6) {
            setValid(true)
        }else {
            setValid(false)
        }
    },[otp])
    const handleValidate = ()=>{
        axios.post("/CONTRACTS-SERVICE/api/subscriptions/sign",{
            subscriptionId : subscriptionState?.id,
            username : agentState?.email,
            otpNumber : otp
        }, {headers: {'Content-Type': 'application/json'}}).then(resp=>{
            console.log(resp.data);
            setSuccess(true);
            setTimeout(navigate("/contracts"),1500)
        })
    }
    return (
        <Col className={" mt-5  d-flex justify-content-center align-items-center"}>
            <Card>
                <Card.Body>
                    <Row  className={success?"d-flex justify-content-center":"d-none"} ><Col xs={12}>
                        <Alert    variant={"success text-center"}>
                            <GrValidate className={"me-1"}/>The Contract signed successfully <Spinner className={"ms-1"}/>
                        </Alert>
                    </Col>
                    </Row>
                    <Row className={"my-2 d-flex justify-content-center"}>
                        <p className={"text-center text-info"}>
                            In order to sign your contract, enter the OTP received as an SMS</p>
                    </Row>
                    <Row className={"my-2 d-flex justify-content-center"}>
                        <Col md={6} xs={12} >
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="OTP"
                                    className="mb-1"
                                >
                                    <Form.Control type="number"
                                                  placeholder="000000"
                                                  maxLength={6}
                                                  minLength={6}
                                                  value={otp}
                                                  onChange={(e)=>setOtp(e.target.value)}
                                                  required
                                                  />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={"my-2"}>
                        <p className={"text-center "}></p>
                    </Row>

                    <Row className={"my-2"}>
                        <Button onClick={()=>handleValidate()} variant="primary text-white" className={valid?"":"disabled"}  >
                            Validate OTP
                        </Button>
                    </Row >
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Otp;