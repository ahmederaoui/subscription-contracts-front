import {Card, Pagination} from "react-bootstrap";
import {VscEye} from "react-icons/vsc";
import {CiEdit} from "react-icons/ci";

function ContractsTable() {
    return (
        <>
            <Card className={"p-0 m-0"} style={{minWidth:"700px"}}>
                <Card.Body>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Agency</th>
                            <th scope="col">Type</th>
                            <th scope="col">Segment</th>
                            <th scope="col">Status</th>
                            <th scope="col">Creation Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ouazzane remel</td>
                            <td>Type 1</td>
                            <td>Individual</td>
                            <td>Signed</td>
                            <td>11-10-2021</td>
                            <td >
                                <VscEye className={"ms-2 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                                <CiEdit className={"ms-3 text-primary"} style={{width:"3vh",height:"3vh"}}/>
                            </td>
                        </tr>

                        </tbody>

                    </table>
                </Card.Body>
                <Card.Footer className={"d-flex justify-content-center align-items-center"}>
                    <Pagination className={"p-0 m-0"}>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Card.Footer>
            </Card>
        </>
    );
}

export default ContractsTable;