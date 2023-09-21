import { Col} from "react-bootstrap";
import Contract from "../../components/contract/Contract.tsx";
import {useContext, useEffect} from "react";
import {SubContext} from "../../contexts/SubscriptionsContext.ts";
import {Subscription} from "../../models/Contract.ts";

function AddContract() {
    const [subscriptionState,setSubscriptionState] = useContext(SubContext)
    useEffect(()=>{
        let subscription:Subscription;
        setSubscriptionState(subscription)
    },[])
    return (
        <Col>
            <Contract type={"add"} />
        </Col>
    );
}

export default AddContract;