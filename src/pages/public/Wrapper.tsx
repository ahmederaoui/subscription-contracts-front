import { Col, Image, Row} from "react-bootstrap";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import "./wrapper.css"
import {Outlet} from "react-router-dom";
import {MfaContext, useMfaState} from "../../contexts/RegistrationContext.ts";

function Wrapper() {
    const mfaState = useMfaState();
    return (
        <MfaContext.Provider value={mfaState}>
            <div >
                    <Row className={"my-3 d-flex justify-content-center align-content-center"}>
                        <Image src="../../../public/vite.svg" className={"w-25 h-25"}  fluid/>
                    </Row>
                    <Row >
                        <Col md={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
                            <Outlet/>
                        </Col>
                    </Row>

                <Row className={" mb-3 mt-4"}>
                    <div className={"d-flex justify-content-center"}>
                        <small>
                            <span className={" text-info"}>© Copyright 2023, By</span>
                            <span className={"ms-1 text-primary"}>Adria Business & Technology</span>
                        </small>
                    </div></Row>


            </div>
        </MfaContext.Provider>
    );
}

export default Wrapper;