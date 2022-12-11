import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { Link } from "react-router-dom";

import { Trash } from "react-bootstrap-icons";

import Data from "../JSONs/products.json";
import { useState } from "react";



function Paypal() {
    return (
        <PayPalScriptProvider
            options={{
                "client-id":
                    "AYcwDoQW6grHeC8qKSjVp35vNRUvhOljz6lpx4ki8H-91IX_LvNlpmO4kewWra8d8wTAPbrZ9NC9g_nl", 
            }}
            
        >
            <PayPalButtons style={{ layout: "horizontal" }} createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: '99.9',
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}/>
        </PayPalScriptProvider>
    );
}

function ShoppingCart() {
    const [cart, setCart] = useState(Data);

    const removeItem = (index) => {
        setCart(cart.filter((o, i) => index !== i));
    };
    return (
        <Container className="m-5">
            <Row className="gap-3">
                <Col xs={10} className="w-75">
                    <Card.Title>Shopping Cart</Card.Title>
                    <hr />
                    {cart.map((item, index) => (
                        <Card className="p-3 w-100 my-2">
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
                </Col>
                <Col>
                    <Card>
                        <Card.Title className="text-center mt-3 p-3">
                            <h2>Total amount</h2>
                            <p>${cart.reduce(
                                (accumulator, currentValue) =>
                                    accumulator + currentValue.price,
                                0
                            )}</p>
                            <Paypal></Paypal>
                        </Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ShoppingCart;
