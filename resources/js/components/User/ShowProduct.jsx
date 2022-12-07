import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Image, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import { useParams } from "react-router-dom";

import Data from "../JSONs/comments.json";
import Product from "../JSONs/products.json";

import { Container } from "react-bootstrap";

function Comments() {
    return (
        <>
            {Data.map((comment) => (
                <Card className="mx-auto w-75 mb-2">
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <p class="mb-1">
                                        <strong>{comment.user}</strong>
                                    </p>
                                </Col>
                                <Col className="d-block ms-auto text-end">
                                    <p class="text-muted">{comment.date}</p>
                                </Col>
                            </Row>
                            <p>{comment.rate}/5</p>
                            {comment.comment}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

function ShowProduct() {
    let { pro } = useParams();
    return (
        <Container className="m-3">
            <Card className="p-3 gap-3">
                {Product.filter((id) => id.id == pro).map((producto) => (
                    <>
                        <Container>
                            <Row>
                                <Col className="rounded border p-2">
                                    <img
                                        className="w-50 mx-auto d-block"
                                        src={"../" + producto.img}
                                    />
                                </Col>
                                <Col className="me-3 p-3">
                                    <Card.Text>
                                        <h4>{producto.name}</h4>
                                    </Card.Text>
                                    <Card.Text>Rate: {producto.rate}/5</Card.Text>
                                    <Card.Text>
                                        Precio: ${producto.price}
                                    </Card.Text>
                                    <Card.Text>
                                        Tiempo de llegada: 
                                    </Card.Text>
                                    <Card.Text>
                                        Unidades disponibles: {producto.stock}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <Card.Text>Caracterisitcas</Card.Text>
                                    <Container className="w-50 d-block ms-0">
                                        <ListGroup comment="flush">
                                            <ListGroup.Item>
                                                Marca: {producto.marca}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Modelo: {producto.modelo}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Tamaño: {producto.tamaño}cm
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Peso: {producto.peso}kg
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Container>
                                    <Card.Text className="mt-2"><h4>Descripcion:</h4></Card.Text>
                                    <Form.Control
                                    className="text-justify"
                                        value={producto.desc}
                                        readOnly
                                        as="textarea"
                                        rows={7}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </>
                ))}

                <Container>
                    <h3>Comentarios</h3>
                    <Comments></Comments>
                </Container>
            </Card>
        </Container>
    );
}

export default ShowProduct;
