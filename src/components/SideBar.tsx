import "./sideBar.css"
import {Col, Row} from "react-bootstrap";
import {RxDashboard} from "react-icons/rx";
import {LiaFileContractSolid} from "react-icons/lia";
import {IoDocumentAttachOutline} from "react-icons/io5";
import {BiLogOut} from "react-icons/bi";
import {FiUsers} from "react-icons/fi";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";


function SideBar() {
    const [currentAction, setCurrentAction] = useState("");
    const location=useLocation();
    useEffect(() => {
        const path=location.pathname;
        setCurrentAction(path.slice(1));
    }, []);
    return (
        <>
            <Row className={"mx-2 mt-2 d-flex justify-content-center d-lg-block d-none align-items-center"}>
                <img src="../../../public/vite.svg" className={" "} width={100} height={70} />
            </Row>
            <Row className={currentAction.startsWith("dashboard")?"mt-5 p-2 current":"mt-5 p-2 normal"} >
                <Col  className={"ms-4 d-flex justify-content-start align-items-center"}>
                    <RxDashboard className={"text-primary"} style={{width:"3vh",height:"3vh"}}/><span className={"ms-3  fs-5"}> Dashboard </span>
                </Col>
            </Row>
            <Row className={currentAction.startsWith("subscribers")?"mt-3 p-2 current":"mt-3 p-2 normal"}>
                <Col className={"ms-4 d-flex justify-content-start align-items-center"} >
                    <FiUsers className={"text-primary"} style={{width:"3vh",height:"3vh"}}/><span className={"ms-3  fs-5"}> Subscribers </span>
                </Col>
            </Row>
            <Row className={currentAction.startsWith("contracts")?"mt-3 p-2 current":"mt-3 p-2 normal"}>
                <Col className={"ms-4 d-flex justify-content-start align-items-center"} >
                    <LiaFileContractSolid className={"text-primary"} style={{width:"3vh",height:"3vh"}}/><span className={"ms-3  fs-5"}> Contracts </span>
                </Col>
            </Row>
            <Row className={currentAction.startsWith("attachments")?"mt-3 p-2 current":"mt-3 p-2 normal"}>
                <Col className={"ms-4 d-flex justify-content-start align-items-center"} >
                    <IoDocumentAttachOutline className={"text-primary"} style={{width:"3vh",height:"3vh"}}/><span className={"ms-3  fs-5"}> Attachments </span>
                </Col>
            </Row>
            <Row className={"mt-3  p-2 normal"} style={{position :"relative", bottom:"-35%"}}>
                <Col className={"ms-4 d-flex justify-content-start align-items-center"} >
                    <BiLogOut className={"text-primary"} style={{width:"3vh",height:"3vh"}}/><span className={"ms-3 fs-5"}> Log out </span>
                </Col>
            </Row>
        </>
    );
}

export default SideBar;