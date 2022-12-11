import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { PencilSquare, Trash3 } from "react-bootstrap-icons";

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css";

function PetCard() {
    return (
        <div class="div_card-profile">
            <Container className="w-50">
                <Button as={Link} to="/ProyectoFinal/public/addPet">
                    Add Pet
                </Button>
                <Card style={{ width: "40rem" }} className='p-2'>
                    <h1>My pets</h1>
                    <hr />
                    <Row>
                        <Col>
                            <Card.Header className="w-100 text-center">
                                Pet's name
                            </Card.Header>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="text-end me-3">
                                    <Button
                                        className="me-1"
                                        as={Link}
                                        to="/ProyectoFinal/public/editPet"
                                        title="Change info"
                                    >
                                        <PencilSquare />
                                    </Button>
                                    <Button>
                                        <Trash3 />
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row ClassName="g-0">
                        <Col>
                            <Card.Img
                                src="images/Koda.jpg"
                                style={{
                                    maxWidth: "300px",
                                    maxHeight: "300px",
                                    margin: "10px",
                                }}
                            />
                        </Col>
                        <Col>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>?: Dog</ListGroup.Item>
                                <ListGroup.Item>Brand: Labrador</ListGroup.Item>
                                <ListGroup.Item>Fur: Negro</ListGroup.Item>
                                <ListGroup.Item>Age: 2 años</ListGroup.Item>
                                <ListGroup.Item>Height: 1.0m</ListGroup.Item>
                                <ListGroup.Item>
                                    Phisycal description
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Text>Notes: </Card.Text>
                                <Card.Text>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default PetCard;
