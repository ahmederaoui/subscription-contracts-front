import {ButtonGroup, Card, Col, Dropdown, DropdownButton, Image, Offcanvas, Row, Stack} from "react-bootstrap";
import {FaUserCircle, FaUserTie} from "react-icons/fa";
import {MdArrowDropDown} from "react-icons/md";
import {CiMenuBurger} from "react-icons/ci";
import {BiLogOut} from "react-icons/bi";
import {useState} from "react";
import SideBar from "./SideBar.tsx";


function TopBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Row>
            <Col lg={10} xs={12} className={"d-flex justify-content-lg-end justify-content-between align-items-center"}>
                    <CiMenuBurger className="d-lg-none ms-3" style={{width:"3vh",height:"3vh", cursor :"pointer"}} onClick={handleShow}/>
                    <Image src="../../../public/adriaa.png" className={"d-lg-none "} width={80} height={75} />
                    <Stack direction={"horizontal"}  gap={2}>
                        <FaUserCircle className=" text-secondary " style={{width:"4vh",height:"4vh"}}/>
                        <div className="">ERAOUI Ahmed</div>
                        <MdArrowDropDown className="bg-secondary-subtle rounded text-secondary dropdown-toggle" href="#" role="button"
                                         id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"3vh",height:"3vh"}}/>

                        <ul className="dropdown-menu"  aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#"><FaUserTie className={"me-1 text-secondary"}/>My profile</a></li>
                            <li><a className="dropdown-item d-flex align-items-center" href="#"><BiLogOut className={"me-1 text-secondary"}/>Logout</a></li>
                        </ul>
                    </Stack>
            </Col>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Image src="../../../public/vite.svg" className={"w-75 h-75"}  fluid/>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SideBar/>
                </Offcanvas.Body>
            </Offcanvas>
        </Row>
    );
}

export default TopBar;