import {useState} from "react";
import {Button, Card, FloatingLabel, Form, FormLabel, Modal, Stack} from "react-bootstrap";
import {IoMdAdd} from "react-icons/io";
import {CiEdit} from "react-icons/ci";

function SignatureMatrix() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={"m-2"}>
            <Card>
                <Card.Body>
                    <Stack direction={"horizontal"} className={"d-flex justify-content-end"}>
                        <Button size={"sm"} variant="outline-primary w-25" type="submit" onClick={handleShow}>
                            <IoMdAdd className={"me-1"}/> Add Matrix
                        </Button>
                    </Stack>
                    <hr/>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Authorized Operation</th>
                            <th scope="col">Min Amount</th>
                            <th scope={"col"}>Max Amount</th>
                            <th scope={"col"}>Signature Profiles   </th>
                            <th scope={"col"}>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>transfer</td>
                            <td>1234</td>
                            <td>1234</td>
                            <td>verement, versement</td>
                            <td >
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
                        <Modal.Title>Add signature matrix</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Authorized Operation"
                                className="mb-1"
                            >
                                <Form.Control type="text"
                                              placeholder="Authorized Operation"
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Min Amount"
                                className="mb-1"
                            >
                                <Form.Control type="number"
                                              placeholder="Min Amount"
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Max Amount"
                                className="mb-1"
                            >
                                <Form.Control type="number"
                                              placeholder="Max Amount"
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FormLabel controlId="floatingSelect" label="Signature Profiles"
                                           className="mb-1 w-100">
                                <Form.Select aria-label="Floating label select example" multiple>
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FormLabel>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default SignatureMatrix;