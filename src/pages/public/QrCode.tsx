import {useContext} from "react";
import {MfaContext} from "../../contexts/RegistrationContext.ts";
import {MfaData} from "../../models/Agent.ts";
import {Button, Col, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function QrCode() {
    const navigate = useNavigate();
    const [mfaState,setMfaState] = useContext<MfaData>(MfaContext)
    return (
        <div className={"rounded shadow-lg px-5 py-3 "} >
            <Row className={"my-2"}> <h3 className={"text-primary text-center"}>Multi-factor Authentication (MFA) Data</h3>
            </Row>
            <Row className={"my-2 d-flex justify-content-center"}>
                    <p className={"text-center text-info"}>
                        To get your TOTP(Time-Based One Time Password), scan this QR code by using an authenticator or you can type the code bellow manually.</p>
            </Row>
            <Row className={"my-2 d-flex justify-content-center"}>
                <Col md={6} xs={12} >
                    <Image src={mfaState.qrCode} alt={"mfa's qr code"} className={"rounded shadow-sm"} fluid/>
                </Col>
            </Row>
            <Row className={"my-2"}>
                    <p className={"text-center "}>{mfaState.mfaCode}</p>
            </Row>

            <Row className={"my-2"}>
                    <Button onClick={()=>navigate("/login")} variant="primary text-white" >
                        Go To Login
                    </Button>
            </Row >
        </div>
    );
}

export default QrCode;