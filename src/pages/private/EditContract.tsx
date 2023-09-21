import {useParams} from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";
import {useContext, useEffect} from "react";
import {SubContext} from "../../contexts/SubscriptionsContext.ts";
import Contract from "../../components/contract/Contract.tsx";
import {Col} from "react-bootstrap";

function EditContract() {
    const {id}=useParams();
    const axios = useAxiosPrivate();
    const [subscriptionState,setSubscriptionState] = useContext(SubContext)
    const fetchContract = ()=>{
        axios.get(`/CONTRACTS-SERVICE/api/subscriptions/search/${id}`).then(resp=>{
            console.log(resp.data)
            setSubscriptionState(resp.data)
        }).catch(error=>{
            console.log(error.message)
        })
    }
    useEffect(()=>{
        return fetchContract();
    },[])
    return (
        <Col>
            <Contract type={"edit"} />
        </Col>
    );
}

export default EditContract;