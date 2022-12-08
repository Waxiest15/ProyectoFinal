import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Image, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import Data from "../JSONs/comments.json";
import Product from "../JSONs/products.json";
import { Container } from "react-bootstrap";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function getToday(){
    var today = new Date();
    var diaHoy = today.getDate();
    if(diaHoy.toString().length<=1) diaHoy='0'+diaHoy
  
    
    var date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
    return date;
  }

function Comments() {
    const [newComment, setNewComment] = useState(Data);

    const [user, setUser] = useState("Admin");
    const [rate, setRate] = useState();
    const [comment, setComment] = useState();
    const [date, setDate] = useState(getToday());

    return (
        <>
            {newComment.map((comment) => (
                <Card className="mx-auto w-100 mb-2">
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <Col className="d-flex gap-3">
                                    <p class="mb-1">
                                        <strong>{comment.user}</strong>
                                    </p>
                                    <p>{comment.rate}/5</p>
                                </Col>
                                <Col className="d-block ms-auto text-end">
                                    <p class="text-muted">{comment.date}</p>
                                </Col>
                            </Row>
                            {comment.comment}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            <Form>
                <Form.Label>Agregar comentarios</Form.Label>
                <Form.Group className="d-flex gap-3 my-2">
                    <Form.Label>Calficiacacion</Form.Label>
                    <Form.Control
                        style={{ width: "auto" }}
                        min={0}
                        max={5}
                        step={0.1}
                        required
                        onChange={(e)=>setRate(e.target.value)}
                        type="number"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                    as="textarea" 
                    rows={3} 
                    required
                    onChange={(e)=>setComment(e.target.value)}
                    />
                    <Button
                        className="mt-2"
                        onClick={() =>
                            setNewComment([...newComment, { user: "Admin", rate: rate, comment, comment, date, date }])
                        }
                    >
                        Comentar
                    </Button>
                </Form.Group>
            </Form>
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
                                    <Row>
                                        <Col>
                                            <Card.Text>
                                                <h4>{producto.name}</h4>
                                            </Card.Text>
                                            <Card.Text>
                                                Rate: {producto.rate}/5
                                            </Card.Text>
                                            <Card.Text>
                                                Precio: ${producto.price}
                                            </Card.Text>
                                            <Card.Text>
                                                Tiempo de llegada:
                                            </Card.Text>
                                            <Card.Text>
                                                Unidades disponibles:{" "}
                                                {producto.stock}
                                            </Card.Text>
                                        </Col>
                                        <Col className="border rounded gap-3 m-1 py-5">
                                            <h5 class="text-center">
                                                Pagar ahora
                                            </h5>
                                            <PayPalScriptProvider
                                                options={{
                                                    "client-id":
                                                        "AYcwDoQW6grHeC8qKSjVp35vNRUvhOljz6lpx4ki8H-91IX_LvNlpmO4kewWra8d8wTAPbrZ9NC9g_nl",
                                                }}
                                            >
                                                <PayPalButtons
                                                    style={{
                                                        layout: "horizontal",
                                                    }}
                                                />
                                            </PayPalScriptProvider>
                                            <Container className="d-flex flex-wrap gap-3">
                                                <Button className="w-100">
                                                    Agregar al Carrito
                                                </Button>
                                                <Button className="w-100">
                                                    Agregar lista de deseos
                                                </Button>
                                            </Container>
                                        </Col>
                                    </Row>
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
                                    <Card.Text className="mt-2">
                                        <h4>Descripcion:</h4>
                                    </Card.Text>
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
