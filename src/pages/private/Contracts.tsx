import {Button, Col, Row} from "react-bootstrap";
import ContractSearch from "../../components/contract/ContractSearch.tsx";
import ContractsTable from "../../components/contract/ContractsTable.tsx";
import {GrFormAdd} from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth.ts";
import {useEffect} from "react";


function Contracts() {
    const navigate = useNavigate();
    const {auth} = useAuth();
    useEffect(()=>console.log(auth),[])

    return (
        <Col>
            <div className={"m-4"}>
                <div className={"m-0 d-flex justify-content-between align-items-center"}>
                    <h3>Contracts</h3><Button size={"sm"} variant="primary d-flex align-items-center" onClick={()=>navigate("/contracts/addcontract")} type="submit">
                    <GrFormAdd className={"me-1"}/>Add Contract
                </Button>
                </div>
                <Row className={"my-1"}>
                    <ContractSearch/>
                </Row>
                <Row>
                    <ContractsTable/>
                </Row>
            </div>
        </Col>
    );
}

export default Contracts;