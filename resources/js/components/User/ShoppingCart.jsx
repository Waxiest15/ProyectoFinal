import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import React from 'react';
import { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Trash } from "react-bootstrap-icons";



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
                }} />
        </PayPalScriptProvider>
    );
}

function ShoppingCart() {
    const user_id = sessionStorage.getItem('user');
    const token = sessionStorage.getItem('token');

    const [cart, setCart] = useState([]);
    useEffect(() => {//Get Neighborhoods from Laravel
        axios.get(`http://localhost:80/ProyectoFinal/public/api/user_show_shopping_cart/${user_id}`,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res.data)
                setCart(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = async (e) => {
        await axios.delete(`http://localhost:80/ProyectoFinal/public/api/quit_from_shopping_cart/${e}`,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log("delete", response.data)
                window.location.reload(true);
            }).catch(error => {
                console.log("NOOOOOOOOOO");
                console.log(error.response.data);

            })
    }

    const handleClear = async (e) => {
        await axios.delete(`http://localhost:80/ProyectoFinal/public/api/clear_cart/${user_id}`,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log("CLEAR", response.data)
                window.location.reload(true);
            }).catch(error => {
                console.log("NOOOOOOOOOO");
                console.log(error.response.data);

            })
    }


    return (
        <Container className="m-5">
            <Row className="gap-3">
                <Col xs={10} className="w-75">
                    <Card.Title>Shopping Cart</Card.Title>
                    <hr />
                    {cart.map(item =>
                        <Card className="p-3 w-100 my-2">
                            <Button variant="danger" className="ms-auto" onClick={() => handleDelete(item.id)}><Trash /></Button>
                            <Row className="p-3" as={Link} to={'../result/' + item.product_id} style={{ textDecoration: 'none' }}>
                                <Col className="p-1 text-center border">
                                    <Image
                                        src={item.image}
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
                                                {item.product}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <p> Description: <br />
                                                    {item.product_des}</p>

                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Rate: {item.rate}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Price: ${item.product_price}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Category: {item.category}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    )}
                </Col>
                <Col>
                    <Card>
                        <Card.Title className="text-center mt-3 p-3">
                            <h2>Total amount</h2>
                            <p>${cart.reduce(
                                (accumulator, currentValue) =>
                                    accumulator + currentValue.product_price,
                                0
                            )}</p>
                            <Paypal></Paypal>
                        </Card.Title>
                    </Card>
                    <br />
                    <Card>
                        <Card.Title className="text-center mt-3 p-3">
                            <h5>Clear Shopping Cart</h5>
                            <Button size="lg" variant="outline-danger" className="ms-auto" onClick={handleClear}><Trash /></Button>
                        </Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ShoppingCart;
