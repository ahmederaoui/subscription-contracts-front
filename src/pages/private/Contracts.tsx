import {Col, Row} from "react-bootstrap";
import ContractSearch from "../../components/ContractSearch.tsx";
import ContractsTable from "../../components/ContractsTable.tsx";


function Contracts() {
    return (
        <Col>
            <div className={"m-5"}>
                <h3>Contracts</h3>
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