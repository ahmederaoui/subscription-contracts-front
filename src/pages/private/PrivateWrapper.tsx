import TopBar from "../../components/TopBar.tsx";
import SideBar from "../../components/SideBar.tsx";
import {Col, Row} from "react-bootstrap";
import {Outlet} from "react-router-dom";

function PrivateWrapper() {
    return (
        <>
            <Row className={"m-0 p-0 h-100 w-100 "}>
                <Col className={"shadow-sm position-fixed h-100 d-lg-block d-none"} style={{background:"#fafcfc"}} lg={2} >
                    <SideBar></SideBar>
                </Col>
                <Col lg={{span:10,offset:2}} xs={12} >
                    <Row className={"shadow-sm bg-white bg-opacity-100 position-fixed w-100 z-2"} style={{height:"10vh"}}>
                        <TopBar></TopBar>
                    </Row>
                    <Row className={"mt-5"}>
                        <Outlet></Outlet>
                    </Row>
                </Col>
            </Row>

        </>
    );
}

export default PrivateWrapper;