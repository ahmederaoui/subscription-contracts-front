import {Card, Row,  Tab, Tabs} from "react-bootstrap";
import CeilingComp from "./CeilingComp.tsx";
import SignatureProfile from "./SignatureProfile.tsx";
import SignatureMatrix from "./SignatureMatrix.tsx";
import ContractForm from "./ContractForm.tsx";
import {useContext, useEffect} from "react";
import {SubContext} from "../../contexts/SubscriptionsContext.ts";

function Contract({type}) {
    const [subscriptionState] = useContext(SubContext)
    return (
        <div className={"m-5"}>
            <h3>New Contract</h3>
            <Row>
                <Card >
                    <Card.Body>
                        <ContractForm type={type} />
                    </Card.Body>
                </Card>
            </Row>
            {(subscriptionState?.id && <Row className={"mt-1"}>
                <Card style={{minWidth:"700px"}}>
                    <Card.Body>
                        <Tabs
                            defaultActiveKey="profile"
                            id="fill-tab-example"
                            className="mb-3"
                            fill
                        >
                            <Tab eventKey="Subscribers" title="Subscribers">
                                Here we will have subscribers
                            </Tab>
                            <Tab eventKey="Web Ceiling" title="Web Ceiling">
                                <CeilingComp type ="web"/>
                            </Tab>
                            <Tab eventKey="Mobile Ceiling" title="Mobile Ceiling">
                                <CeilingComp type = "mobile"/>
                            </Tab>
                            <Tab eventKey="Signature Profiles" title="Signature Profiles">
                                <SignatureProfile/>
                            </Tab>
                            {(subscriptionState?.clientSegment==="BUSINESS" && <Tab eventKey="Signature Matrices" title="Signature Matrices">
                                <SignatureMatrix/>
                            </Tab>)}
                        </Tabs>
                    </Card.Body>
                </Card>
            </Row>)}
        </div>
    );
}

export default Contract;