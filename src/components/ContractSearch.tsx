import {Button, Card, Col, FloatingLabel, Form, Row, Stack} from "react-bootstrap";

function ContractSearch() {
    return (
        <>
            <Card >
                <Card.Body>
                    <Form onSubmit={()=> ""}>
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
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col md={4} xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingSelect" label="Contract Status"
                                                   className="mb-1">
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col md={4} xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingSelect" label="Contract type"
                                                   className="mb-1">
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingSelect" label="Contract type"
                                                   className="mb-1">
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Agency"
                                        className="mb-1"
                                    >
                                        <Form.Control type="Text"
                                                      placeholder="Agency"
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Stack direction={"horizontal"} gap={2} className={"d-flex justify-content-end align-items-center"}>
                                <Button size={"sm"} variant="outline-primary w-25" type="submit">
                                    Reset
                                </Button>
                                <Button size={"sm"} variant="primary w-25" type="submit">
                                    Search
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