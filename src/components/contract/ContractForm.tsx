import {Alert, Button, Col, FloatingLabel, Form, Row, Stack} from "react-bootstrap";
import {IoMdAdd} from "react-icons/io";
import {CiEdit} from "react-icons/ci";
import {AiOutlineStop} from "react-icons/ai";
import {MdOutlineCancel} from "react-icons/md";
import {useContext, useEffect, useState} from "react";
import {AgentContext} from "../../contexts/AgentContext.ts";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";
import {SubContext} from "../../contexts/SubscriptionsContext.ts";
import {GrValidate} from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import {TbSignature} from "react-icons/tb";


function ContractForm({ type}) {
    const [tp,setTp]= useState(type);
    const [subscriptionState,setSubscriptionState] = useContext(SubContext)
    const [errMsg, setErrMsg] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [agentState] = useContext(AgentContext);
    const axios = useAxiosPrivate();
    const navigate = useNavigate();
    const handleAdd = ()=>{
        console.log('hey1')
        console.log(subscriptionState)
        console.log('hey2')
        axios.post("/CONTRACTS-SERVICE/api/subscriptions/create",{
            contractType:subscriptionState.contractType,
            agency:subscriptionState.agency,
            bankCode:subscriptionState.bankCode,
            clientSegment:subscriptionState.clientSegment,
            address:subscriptionState.address,
            agentId:subscriptionState.agentId,
        }, {headers: {'Content-Type': 'application/json'}}).then(resp=>{
            console.log(resp.data)
            setSubscriptionState(resp.data)
            setSuccess(true)
            setTp("edit")
        }).catch(error=>{
            setErrMsg(error.message)
            console.log(error.message)
        })
    }
    const handleEdit = ()=>{
        console.log('hey1')
        console.log(subscriptionState)
        console.log('hey2')
        axios.put("/CONTRACTS-SERVICE/api/subscriptions/update",subscriptionState, {headers: {'Content-Type': 'application/json'}}).then(resp=>{
            console.log(resp.data)
            setSubscriptionState(resp.data)
            setSuccess(true)
            setTp("edit")
        }).catch(error=>{
            setErrMsg(error.message)
            console.log(error.message)
        })
    }
    const handleSign = ()=>{
        axios.post("/SMS-SERVICE/api/sms/send",{
            username : agentState?.email,
            phoneNumber : agentState?.phone
        }, {headers: {'Content-Type': 'application/json'}}).then(resp=>{
            console.log(resp.data)
            navigate("/otp")
        }).catch(error=>{
            setErrMsg(error.message)
            console.log(error.message)
        })
    }
    const handleCancel = ()=>{
            axios.put(`/CONTRACTS-SERVICE/api/subscriptions/cancel/${subscriptionState.id}`).then(resp=>{
            console.log(resp.data)
                setSubscriptionState(resp.data)
                setSuccess(true)
        }).catch(error=>{
            setErrMsg(error.message)
            console.log(error.message)
        })
    }
    return ( tp==="add" || tp==="edit" ? (<Form onClick={()=> {
        setErrMsg("")
        setSuccess(false)
    }} >
        <Row  className={errMsg?"d-flex justify-content-center":"d-none"} ><Col xs={12}>
            <Alert    variant={"danger text-center"}>
                {errMsg}
            </Alert>
        </Col></Row>
        <Row  className={success?"d-flex justify-content-center":"d-none"} ><Col xs={12}>
            <Alert    variant={"success text-center"}>
                <GrValidate className={"me-1"}/>The operation was completed successfully
            </Alert>
        </Col></Row>
        <Row>
            <Col md={4} xs={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Agent ID"
                        className="mb-1"
                    >
                        <Form.Control type="Text"
                                      placeholder="Agent ID"
                                      value={tp==="edit"?subscriptionState?.agentId:agentState?.id}
                        disabled/>
                    </FloatingLabel>
                </Form.Group>
            </Col>
            <Col md={4} xs={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Agency"
                        className="mb-1"
                    >
                        <Form.Control type="Text"
                                      placeholder="Agency"
                                      value={tp==="edit"?subscriptionState?.agency:null}
                                      onChange={(e)=> {
                                          setSubscriptionState({...subscriptionState, agency: e.target.value})
                                      }}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Col>
            <Col md={4} xs={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Bank Code"
                        className="mb-1"
                    >
                        <Form.Control type="Text"
                                      placeholder="Bank Code"
                                      value={tp==="edit"?subscriptionState?.bankCode:null}
                                      onChange={(e)=>setSubscriptionState({...subscriptionState,bankCode:e.target.value})}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Col>
            <Col md={4} xs={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Address"
                        className="mb-1"
                    >
                        <Form.Control type="Text"
                                      placeholder="Address"
                                      value={tp==="edit"?subscriptionState?.address:null}
                                      onChange={(e)=>setSubscriptionState({...subscriptionState,address:e.target.value})}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Col>
            <Col md={4} xs={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingSelect" label="Contract type"
                                   className="mb-1">
                        <Form.Select aria-label="Floating label select example"
                                     value={tp==="edit"?subscriptionState?.contractType:null}
                                     onChange={(e)=>setSubscriptionState({...subscriptionState,contractType:e.target.value})}>
                            <option>Chose Type</option>
                            <option value="TYPE1">TYPE1</option>
                            <option value="TYPE2">TYPE2</option>
                            <option value="TYPE3">TYPE3</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
            </Col>
            <Col md={4} xs={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingSelect" label="Client Segment"
                                   className="mb-1">
                        <Form.Select aria-label="Floating label select example"
                                     value={tp==="edit"?subscriptionState?.clientSegment:null}
                                     onChange={(e)=>setSubscriptionState({...subscriptionState,clientSegment:e.target.value})}>
                            <option>Chose Segment</option>
                            <option value="INDIVIDUAL">INDIVIDUAL</option>
                            <option value="BUSINESS">BUSINESS</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
            </Col>
            <Col md={4} xs={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingSelect" label="Contract Status"
                                   className="mb-1">
                        <Form.Select aria-label="Floating label select example" value={subscriptionState?.contractStatus}
                                      disabled>
                            <option value={"REGISTERED"}>REGISTERED</option>
                            <option value={"CANCELED"}>CANCELED</option>
                            <option value={"SIGNED"}>SIGNED</option>
                            <option value={"TERMINATED"}>TERMINATED</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Stack direction={"horizontal"} gap={2} className={"d-flex justify-content-end align-items-center"}>
                {(tp==="edit" && subscriptionState?.contractStatus==="SIGNED" )&&(<Button onClick={()=>handleCancel()} size={"sm"} variant="outline-danger w-25" >
                    <AiOutlineStop className={"me-1"}/> Terminate Contract</Button>) }
                {(tp==="edit" && subscriptionState?.contractStatus==="REGISTERED" )&&(<><Button size={"sm"} variant="outline-danger w-25" onClick={()=>handleCancel()} >
                    <MdOutlineCancel className={"me-1"}/> Cancel Contract</Button> <Button size={"sm"} variant="outline-success w-25" onClick={()=>handleSign()} >
                    <TbSignature className={"me-1"} /> Sign Contract</Button><Button size={"sm"} variant="primary w-25" onClick={()=>handleEdit()}>
                    <CiEdit className={"me-1"}/> Save Changes
                </Button>  </>) }
                {(tp==="add"  )&&(<Button size={"sm"} variant="primary w-25" onClick={()=>handleAdd()}>
                    <IoMdAdd className={"me-1"}/> Add Contract</Button>) }
            </Stack>
        </Row>
    </Form>):(<Row>
        <Col md={4} xs={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Agent ID"
                    className="mb-1"
                >
                    <Form.Control type="Text"
                                  placeholder="Agent ID"
                                  value={subscriptionState?.agentId}
                    disabled/>
                </FloatingLabel>
            </Form.Group>
        </Col>
        <Col md={4} xs={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Agency"
                    className="mb-1"
                >
                    <Form.Control type="Text"
                                  placeholder="Agency"
                                  value={subscriptionState?.agency}
                                  disabled/>
                </FloatingLabel>
            </Form.Group>
        </Col>
        <Col md={4} xs={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Bank Code"
                    className="mb-1"
                >
                    <Form.Control type="Text"
                                  placeholder="Bank Code"
                                  value={subscriptionState?.bankCode}
                                  disabled/>
                </FloatingLabel>
            </Form.Group>
        </Col>
            <Col md={4} xs={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Address"
                        className="mb-1"
                    >
                        <Form.Control type="Text"
                                      placeholder="Address"
                                      value={subscriptionState?.address}
                                      disabled/>
                    </FloatingLabel>
                </Form.Group>
            </Col>
        <Col md={4} xs={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingSelect" label="Contract type"
                               className="mb-1">
                    <Form.Select aria-label="Floating label select example" value={subscriptionState?.contractType} disabled>
                        <option value="TYPE1">TYPE1</option>
                        <option value="TYPE2">TYPE2</option>
                        <option value="TYPE3">TYPE3</option>
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>
        </Col>
        <Col md={4} xs={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingSelect" label="Client Segment"
                               className="mb-1">
                    <Form.Select aria-label="Floating label select example" value={subscriptionState?.clientSegment} disabled>
                        <option value="INDIVIDUAL">INDIVIDUAL</option>
                        <option value="BUSINESS">BUSINESS</option>
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>
        </Col>
    </Row>
        ));
}

export default ContractForm;