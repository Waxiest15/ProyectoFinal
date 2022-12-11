import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { EyeSlash } from "react-bootstrap-icons";

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css";
import { useState } from "react";

function ProfileAdmin() {
    const [read, setRead] = useState(true);
    const [see, setSee] = useState(true);

    return (
        <div class="div_card-profile">
            <Container>
                {read ? <Button onClick={() => setRead(!read)}>Editar</Button> : <></>}
                <Card className="w-75 p-3">
                    <h1>Bussines profile</h1>
                    <Card.Header className="w-100 text-center">
                    <Form.Group className="d-flex w-100 ">
                        <Form.Control
                            className="w-100 my-auto"
                            readOnly={read}
                            defaultValue={
                                "Fernando Robles Castorena"
                            }
                        />
                    </Form.Group>
                    </Card.Header>
                    <Row>
                        <Col>
                            <Card.Img
                                src="images/profile-default.webp"
                                className="w-75 mx-auto d-block"
                            />
                        </Col>
                        <Col>
                            <ListGroup className="list-group-flush">
                                <Row>
                                    <Col>
                                        <Form.Group className="d-flex">
                                            <Form.Label className="my-auto me-2">
                                                Age:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly={read}
                                                defaultValue={21}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="d-flex">
                                            <Form.Label className="my-auto me-2">
                                                Gender:
                                            </Form.Label>
                                            <Form.Control
                                                readOnly={read}
                                                defaultValue={"M"}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="d-flex">
                                    <Form.Label className="my-auto me-2">
                                        Residence:
                                    </Form.Label>
                                    <Form.Control
                                        readOnly={read}
                                        defaultValue={"inventado"}
                                    />
                                </Form.Group>
                                <ListGroup.Item>
                                    <strong>Contact info</strong>
                                </ListGroup.Item>
                                <Form.Group className="d-flex">
                                    <Form.Label className="my-auto me-2">
                                        Email:
                                    </Form.Label>
                                    <Form.Control
                                        readOnly={read}
                                        defaultValue={"cuentafalsa@scamail.com"}
                                    />
                                </Form.Group>
                                <Form.Group className="d-flex">
                                    <Form.Label className="my-auto me-2">
                                        Phone:
                                    </Form.Label>
                                    <Form.Control
                                        readOnly={read}
                                        defaultValue={"449 246 9875"}
                                    />
                                </Form.Group>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Form.Group className="d-flex w-100 ">
                        <Form.Label className="my-auto me-2">Send to:</Form.Label>
                        <Form.Control
                            className="w-100 my-auto"
                            readOnly={read}
                            defaultValue={
                                "Direccion de envio: Col. Villanos, C. Heisenerg 103"
                            }
                        />
                    </Form.Group>
                    <Form.Group className="d-flex w-100 ">
                        <Form.Label className="my-auto me-2">
                            Password:
                        </Form.Label>
                        <Form.Control
                            type={see ? "password" : "text"}
                            className="w-100 my-auto"
                            readOnly={read}
                            defaultValue={"The papeador"}
                        />
                        <Button
                            className="my-auto mx-1"
                            onClick={() => setSee(!see)}
                        >
                            <EyeSlash />
                        </Button>
                    </Form.Group>
                    {!read ? <Button onClick={()=>setRead(!read)}>Save</Button> : <></>}
                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Title>Pets</Card.Title>
                                <Row>
                                    <Col>Name</Col>
                                    <Col>?</Col>
                                    <Col>Breed</Col>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default ProfileAdmin;
