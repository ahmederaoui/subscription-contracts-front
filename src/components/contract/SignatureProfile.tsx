import {Button, Card, FloatingLabel, Form, Modal, Stack} from "react-bootstrap";
import {IoMdAdd} from "react-icons/io";
import {CiEdit} from "react-icons/ci";
import {useState} from "react";

function SignatureProfile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
            <div className={"m-2"}>
                <Card>
                    <Card.Body>
                        <Stack direction={"horizontal"} className={"d-flex justify-content-end"}>
                            <Button size={"sm"} variant="outline-primary w-25" type="submit" onClick={handleShow}>
                                <IoMdAdd className={"me-1"}/> Add Profile
                            </Button>
                        </Stack>
                        <hr/>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Rank</th>
                                <th scope="col">Description</th>
                                <th scope={"col"}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>12</td>
                                <td>descriptions, desc riptions</td>
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
                            <Modal.Title>Add signature profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Rank"
                                    className="mb-1"
                                >
                                    <Form.Control type="number"
                                                  placeholder="Rank"
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Description"
                                    className="mb-1"
                                >
                                    <Form.Control type="text"
                                                  placeholder="Description"
                                    />
                                </FloatingLabel>
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

export default SignatureProfile;