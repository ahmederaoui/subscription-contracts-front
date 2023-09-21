import Contract from "../../components/contract/Contract.tsx";
import {Col} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";
import {SubContext} from "../../contexts/SubscriptionsContext.ts";


function ConsultContract() {
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
            <Contract type={"consult"} />
        </Col>
    );
}

export default ConsultContract;