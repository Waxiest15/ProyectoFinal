import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AdminProducto from "./AdminProducts";
import AdminCategorias from "./AdminCategorias"
import AdminProfile from "./AdminProfile"

import { Container } from "react-bootstrap";

function AdminPanel() {
    return (
        <Container className="m-0 p-2 w-100">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column gap-3">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tags</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Bussiness profile</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col  className='border'>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className="">
                                <AdminProducto/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <AdminCategorias />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <AdminProfile />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default AdminPanel;
