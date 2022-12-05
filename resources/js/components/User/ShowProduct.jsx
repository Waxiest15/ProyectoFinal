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
                <h1>Aqui</h1>
                {Product.filter((id) => id.id == pro).map((producto) => (
                    <>
                        <Container>
                            <Row>
                                <Col>
                                    <img
                                        className="w-50"
                                        src={"../" + producto.img}
                                    />
                                </Col>
                                <Col className="rounded border me-3 p-3">
                                    <Card.Text>
                                        Nombre: {producto.name}
                                    </Card.Text>
                                    <Card.Text>Rate: {producto.rate}</Card.Text>
                                    <Card.Text>
                                        Precio: {producto.price}
                                    </Card.Text>
                                    <Card.Text>
                                        Tiempo de llegada: sabe
                                    </Card.Text>
                                    <Card.Text>
                                        Stock: {producto.stock}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <Card.Text>Caracterisitcas</Card.Text>
                                    <Container className="border w-50 d-block ms-0">
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
                                    <Card.Text>Descripcion:</Card.Text>
                                    <Form.Control
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
                <h1>Aca</h1>

                <Container>
                    <h3>Comentarios</h3>
                    <Comments></Comments>
                </Container>
            </Card>
        </Container>
    );
}

export default ShowProduct;
