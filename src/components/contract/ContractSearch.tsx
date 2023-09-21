import {Button, Card, Col, FloatingLabel, Form, Row, Stack} from "react-bootstrap";
import {AiOutlineSearch} from "react-icons/ai";
import {TbZoomReset} from "react-icons/tb";
import {useContext, useEffect} from "react";
import {SubscriptionsContext} from "../../contexts/SubscriptionsContext.ts";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";
import {ClientSegment, ContractStatus, ContractType, Subscription} from "../../models/Contract.ts";
import {useSubscriptionsSearchState} from "../../contexts/SubscriptionsSearchContext.ts";


function ContractSearch() {
    const [subscriptionsState,setSubscriptionsState] = useContext(SubscriptionsContext)
    const [subscriptionsSearchState,setSubscriptionsSearchState] = useSubscriptionsSearchState();
    const axios = useAxiosPrivate();
    const searchSubscriptions = ()=>{
        axios.get<Subscription[]>(`/CONTRACTS-SERVICE/api/subscriptions/search?agency=${subscriptionsSearchState.agency}&contractStatus=${subscriptionsSearchState.contractStatus}&contractType=${subscriptionsSearchState.contractType}&clientSegment=${subscriptionsSearchState.clientSegment}&id=${subscriptionsSearchState.id}`)
            .then(resp=>{
                setSubscriptionsSearchState({
                    ...subscriptionsSearchState, pagesNum: resp.data.totalPages
                })
                console.log(subscriptionsSearchState)
                setSubscriptionsState(resp.data.content)
                console.log("hey")
                console.log(subscriptionsState)
            }).catch(error=>{
                console.log(error.message)
        })
    }
    useEffect(()=>{
        searchSubscriptions();
    },[])
    return (
        <>
            <Card >
                <Card.Body>
                    <Form >
                        <Row>
                            <Col md={4} xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Agency"
                                        className="mb-1"
                                    >
                                        <Form.Control type="Text"
                                                      placeholder="Agency"
                                                      value={subscriptionsSearchState?.agency}
                                                      onChange={(e)=>setSubscriptionsSearchState({...subscriptionsSearchState,
                                                      agency:e.target.value })}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col md={4} xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingSelect" label="Contract Status"
                                                   className="mb-1">
                                        <Form.Select aria-label="Floating label select example" value={subscriptionsSearchState?.contractStatus}
                                                     onChange={(e)=>setSubscriptionsSearchState({...subscriptionsSearchState,
                                                         contractStatus:e.target.value })}>
                                            <option value={"REGISTERED"}>REGISTERED</option>
                                            <option value={"CANCELED"}>CANCELED</option>
                                            <option value={"SIGNED"}>SIGNED</option>
                                            <option value={"TERMINATED"}>TERMINATED</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col md={4} xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingSelect" label="Contract type"
                                                   className="mb-1">
                                        <Form.Select aria-label="Floating label select example" value={subscriptionsSearchState?.contractType}
                                                     onChange={(e)=>setSubscriptionsSearchState({...subscriptionsSearchState,
                                                         contractType:e.target.value })}>
                                            <option value={"TYPE1"}>TYPE1</option>
                                            <option value={"TYPE2"}>TYPE2</option>
                                            <option value={"TYPE3"}>TYPE3</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingSelect" label="Client segment"
                                                   className="mb-1">
                                        <Form.Select aria-label="Floating label select example" value={subscriptionsSearchState?.clientSegment}
                                                     onChange={(e)=>setSubscriptionsSearchState({...subscriptionsSearchState,
                                                         clientSegment:e.target.value })}>
                                            <option value={"INDIVIDUAL"}>INDIVIDUAL</option>
                                            <option value={"BUSINESS"}>BUSINESS</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="ID"
                                        className="mb-1"
                                    >
                                        <Form.Control type="Text"
                                                      placeholder="ID"
                                                      value={subscriptionsSearchState?.id}
                                                      onChange={(e)=>setSubscriptionsSearchState({...subscriptionsSearchState,
                                                          id:e.target.value })}/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Stack direction={"horizontal"} gap={2} className={"d-flex justify-content-end align-items-center"}>
                                <Button size={"sm"} variant="outline-primary w-25"  onClick={()=>setSubscriptionsSearchState({agency : "",
                                    contractStatus:"REGISTERED",
                                    contractType:"TYPE1",
                                    clientSegment:"INDIVIDUAL",
                                    id:"",
                                    page:0,
                                    size:10,
                                    pagesNum:1})}>
                                    <TbZoomReset className={"me-1"}/> Reset
                                </Button>
                                <Button size={"sm"} variant="primary w-25" onClick={()=>searchSubscriptions()}>
                                    <AiOutlineSearch className={"me-1"}/> Search
                                </Button>
                            </Stack>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default ContractSearch;