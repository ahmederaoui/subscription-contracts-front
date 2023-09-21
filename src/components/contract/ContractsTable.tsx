import {Card, Pagination} from "react-bootstrap";
import {VscEye} from "react-icons/vsc";
import {CiEdit} from "react-icons/ci";
import {useContext} from "react";
import {SubscriptionsContext} from "../../contexts/SubscriptionsContext.ts";
import * as dayjs from "dayjs";
import {useSubscriptionsSearchState} from "../../contexts/SubscriptionsSearchContext.ts";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";
import {Subscription} from "../../models/Contract.ts";
import {useNavigate} from "react-router-dom";

function ContractsTable() {
    const [subscriptionsState,setSubscriptionsState] = useContext(SubscriptionsContext)
    const [subscriptionsSearchState,setSubscriptionsSearchState] = useSubscriptionsSearchState();
    const axios = useAxiosPrivate();
    const navigate = useNavigate();
    const searchSubscriptions = ()=>{
        axios.get<Subscription[]>(`/CONTRACTS-SERVICE/api/subscriptions/search?agency=${subscriptionsSearchState.agency}&contractStatus=${subscriptionsSearchState.contractStatus}&contractType=${subscriptionsSearchState.contractType}&clientSegment=${subscriptionsSearchState.clientSegment}&id=${subscriptionsSearchState.id}`)
            .then(resp=>{
                setSubscriptionsSearchState({
                    ...subscriptionsSearchState, pagesNum: resp.data.totalPages
                })
                setSubscriptionsState(resp.data.content)
            }).catch(error=>{
            console.log(error.message)
        })
    }

    const handleGotoPage = (index)=>{

        if (index>=0) {
            setSubscriptionsSearchState({...subscriptionsSearchState,page:index })
            searchSubscriptions()
        }
        if(index==="first"){
            setSubscriptionsSearchState({...subscriptionsSearchState,page:0 })
            searchSubscriptions()
        }
        if(index==="last"){
            setSubscriptionsSearchState({...subscriptionsSearchState,page:subscriptionsSearchState.pagesNum })
            searchSubscriptions()
        }
        if(index==="next"){
            if (subscriptionsSearchState.page+1<subscriptionsSearchState.pagesNum){
                setSubscriptionsSearchState({...subscriptionsSearchState,page:subscriptionsSearchState.page+1 })
                searchSubscriptions()
            }
        }
        if(index==="prev"){
            if (subscriptionsSearchState.page-1>0){
                setSubscriptionsSearchState({...subscriptionsSearchState,page:subscriptionsSearchState.page+1 })
                searchSubscriptions()
            }
        }
    }

        return (
            <Card className={"p-0 m-0"} style={{minWidth:"700px"}}>
                <Card.Body>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Agency</th>
                            <th scope="col">Type</th>
                            <th scope="col">Segment</th>
                            <th scope="col">Status</th>
                            <th scope="col">Creation Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {subscriptionsState?.map((sub,index)=>(<tr key={index}>
                            <th scope="row">{sub?.id.slice(0,6)}</th>
                            <td>{sub?.agency}</td>
                            <td>{sub?.contractType}</td>
                            <td>{sub?.clientSegment}</td>
                            <td>{sub?.contractStatus}</td>
                            <td>{ dayjs(sub?.creationDate).format("DD/MM/YYYY") }</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} onClick={()=>navigate(`/contracts/${sub?.id}`)} style={{width:"3vh",height:"3vh",cursor:"pointer"}}/>
                                <CiEdit className={"ms-3 text-primary"} onClick={()=>navigate(`/contracts/edit/${sub?.id}`)} style={{width:"3vh",height:"3vh",cursor:"pointer"}}/>
                            </td>
                        </tr>))}

                        </tbody>

                    </table>
                </Card.Body>
                <Card.Footer className={"d-flex justify-content-center align-items-center"}>
                    <Pagination className={"p-0 m-0"}>
                        <Pagination.First onClick={()=>handleGotoPage("first")} />
                        <Pagination.Prev onClick={()=>handleGotoPage("prev")}/>
                        {(new Array(subscriptionsSearchState?.pagesNum).fill(0)).map((p,index)=>(
                            <Pagination.Item key={index} active={(subscriptionsSearchState?.page===(index))?true:false} onClick={()=>handleGotoPage(index)} style={{cursor:"pointer"}}>{index+1}</Pagination.Item>

                        ))}

                        <Pagination.Next onClick={()=>handleGotoPage("next")}/>
                        <Pagination.Last onClick={()=>handleGotoPage("last")}/>
                    </Pagination>
                </Card.Footer>
            </Card>
    );
}

export default ContractsTable;