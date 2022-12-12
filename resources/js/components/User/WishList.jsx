import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { Trash } from "react-bootstrap-icons";

import Data from "../JSONs/products.json";
import { useState } from "react";

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    

    const removeItem = (index) => {
        setCart(cart.filter((o, i) => index !== i));
    };
    return (
        <Container className="m-5">
            <Row className="gap-3">
            <Card.Title>Wish List </Card.Title>
                    <hr />
                    {cart.map((item, index) => (
                        <Card className="p-3 w-100 my-2" >
                            <Button className="ms-auto" onClick={() => removeItem(index)}><Trash/></Button>
                            <Row className="p-3" as={Link} to={'../result/'+item.id} style={{textDecoration: 'none'}}>
                                <Col className="p-1 text-center border">
                                    <Image
                                        src={item.img}
                                        style={{
                                            maxWidth: "250px",
                                            maxHeight: "250px",
                                        }}
                                    ></Image>
                                </Col>
                                <Col xs={8}>
                                    <Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>
                                                {item.name}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Price: ${item.price}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Rate: {item.rate}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
            </Row>
        </Container>
    );
}

export default ShoppingCart;
