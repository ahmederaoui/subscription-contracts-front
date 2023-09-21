import {Button, Card, FloatingLabel, Form, Modal, Stack} from "react-bootstrap";
import {IoMdAdd} from "react-icons/io";
import {CiEdit} from "react-icons/ci";
import {useContext, useEffect, useState} from "react";
import {SubContext} from "../../contexts/SubscriptionsContext.ts";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";
import {Ceiling} from "../../models/Contract.ts";

function CeilingComp({type}) {
    const [show, setShow] = useState(false);
    const [operation, setOperation] = useState('');
    const [updatedCeiling,setUpdatedCeiling] = useState<Ceiling>();
    const [newCeiling,setNewCeiling] = useState<Ceiling>();
    const [subscriptionState,setSubscriptionState] = useContext(SubContext)
    const axios = useAxiosPrivate();
    const [ceiling,setCeiling] = useState<Ceiling>()
    const fetchCeilings = ()=>{
        axios.get(`CONTRACTS-SERVICE/api/${type}Ceilings/search/${subscriptionState?.id}`).then(resp=>{
            console.log(resp)
            if(resp.data){
                setCeiling(resp.data)
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    const handleOperation = ()=>{
        console.log(newCeiling)
        if(operation === "Add"){
            axios.post(`/CONTRACTS-SERVICE/api/${type}Ceilings/create/${subscriptionState?.id}`,{
                    minUnitAmount:newCeiling?.minUnitAmount,
                    maxUnitCeiling:newCeiling?.maxUnitCeiling,
                    TransferPerDay:newCeiling?.TransferPerDay
                },
                {headers: {'Content-Type': 'application/json'}}).then(resp=>{
                    console.log(resp.data);
                    setCeiling(resp.data);
                    handleClose();
            }).catch(err=>{
                console.log(err.message)
            })
        }
        if(operation === "Edit"){
            axios.put(`/CONTRACTS-SERVICE/api/${type}Ceilings/update`,{
                id:updatedCeiling.id,
                    minUnitAmount:updatedCeiling.minUnitAmount,
                    maxUnitCeiling:updatedCeiling.maxUnitCeiling,
                    TransferPerDay:updatedCeiling.TransferPerDay
                },
                {headers: {'Content-Type': 'application/json'}}).then(resp=>{
                console.log(resp.data);
                setCeiling(resp.data);
                handleClose();
            }).catch(err=>{
                console.log(err.message)
            })
        }
    }
    useEffect(()=>{
        return fetchCeilings();
    },[])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={"m-2"}>
            <Card>
                <Card.Body>
                    <Stack direction={"horizontal"} className={"d-flex justify-content-end"}>
                        <Button className={ceiling?"d-none":""} size={"sm"} variant="outline-primary w-25" onClick={()=> {
                            setOperation("Add")
                            handleShow()
                        }}>
                            <IoMdAdd className={"me-1"}/> Add Ceiling
                        </Button>
                    </Stack>
                    <hr/>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Min Unit Amount</th>
                            <th scope="col">Max Unit Amount</th>
                            <th scope="col">Transfer Per Day</th>
                            <th scope={"col"}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className={!ceiling?"d-none":""} >
                            <th scope="row">{ceiling?.id}</th>
                            <td>{ceiling?.minUnitAmount}</td>
                            <td>{ceiling?.maxUnitCeiling}</td>
                            <td>{ceiling?.TransferPerDay}</td>
                            <td onClick={()=> {
                                setOperation("Edit")
                                setUpdatedCeiling(ceiling)
                                handleShow()
                            }}>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh",cursor:"pointer"}}/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>{operation } {type} ceiling</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Min Unit Amount"
                                className="mb-1"
                            >
                                <Form.Control type="number"
                                              placeholder="Min Unit Mount"
                                              value={operation==="Edit"?updatedCeiling?.minUnitAmount:null}
                                              onChange={(e)=> {
                                                  return operation === "Edit" ? setUpdatedCeiling({
                                                      ...updatedCeiling,
                                                      minUnitAmount: e.target.value
                                                  }) : setNewCeiling({...newCeiling, minUnitAmount: e.target.value})
                                              }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Max Unit Amount"
                                className="mb-1"
                            >
                                <Form.Control type="number"
                                              placeholder="Max Unit Mount"
                                              value={operation==="Edit"?updatedCeiling?.maxUnitCeiling:null}
                                              onChange={(e)=> {
                                                  return operation === "Edit" ? setUpdatedCeiling({
                                                      ...updatedCeiling,
                                                      maxUnitCeiling: e.target.value
                                                  }) : setNewCeiling({...newCeiling, maxUnitCeiling: e.target.value})
                                              }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Transfer Per Day"
                                className="mb-1"
                            >
                                <Form.Control type="number"
                                              placeholder="Transfer Per Day"
                                              value={operation==="Edit"?updatedCeiling?.TransferPerDay:null}
                                              onChange={(e)=> {
                                                  return operation === "Edit" ? setUpdatedCeiling({
                                                      ...updatedCeiling,
                                                      TransferPerDay: e.target.value
                                                  }) : setNewCeiling({...newCeiling, TransferPerDay: e.target.value})
                                              }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleOperation}>
                            {operation}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default CeilingComp;