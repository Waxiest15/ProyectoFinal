import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { Row, Col, Image, Form, Alert } from 'react-bootstrap';
import Data from "./JSONs/carrousel.json";

import AliceCarousel, { AnimationType } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css";
import { Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import axios from 'axios';

const handleDragStart = (e) => e.preventDefault();

const items = Data.map((src) => (
    <img
        style={{ maxWidth: "250px", height: "100%" }}
        src={"images/Carrousel/" + src.img}
        onDragStart={handleDragStart}
        role="presentation"
    />
));

const Gallery = () => {
    return (
        <AliceCarousel
            animationDuration={1500}
            autoWidth={true}
            autoHeight={true}
            mouseTracking
            disableDotsControls={true}
            autoPlay={true}
            infinite={true}
            items={items}
        />
    );
};

function carousel() {
    const user_id = sessionStorage.getItem('user');
    const token = sessionStorage.getItem('token');
    let navigate = useNavigate();
    const navigateTo = (url) => {
        let path = url;
        navigate("/" + url);
    };

    const [productos, setProductos] = useState([]);
    useEffect(() => {//Get products from Laravel
        axios.get('http://localhost:80/ProyectoFinal/public/api/product_show_all')
            .then(res => {
                console.log(res)
                setProductos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div class="main">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="images/comida.jfif"
                            alt="First slide"
                            class="img-carrousel"
                        />
                        <Carousel.Caption>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="images/perrosPanoramica.png"
                            alt="Second slide"
                            class="img-carrousel"
                        />
                        <Carousel.Caption>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/perrosPanoramica_1.png"
                            alt="Third slide"
                            class="img-carrousel"
                        />
                        <Carousel.Caption>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br />
                <h4>Available brands</h4>
                <Container>
                    <Gallery />
                </Container>

                <CardGroup xs sm lg>
                        <Container className="d-flex flex-wrap">
                            
                            <Row lg={3} sm={2} xs={1}>

                                {productos.map(product => (
                                        <>
                                            <Col>

                                                <Card

                                                    className="p-3 m-1 w-100"
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                    }}

                                                >


                                                    <Card.Img

                                                        style={{ height: '300px' }}
                                                        src={product.image}
                                                        className="w-100"
                                                        alt="Card image"
                                                    />

                                                    <Card.Body>
                                                        <Card.Text>{product.name}</Card.Text>
                                                        <Card.Text><strong>Description:</strong></Card.Text>
                                                        <Card.Text>{product.description}</Card.Text>
                                                        <Card.Text> <strong>Price:</strong>  ${product.price}</Card.Text>
                                                        <Card.Text> <strong>Category:</strong>  {product.category_id}</Card.Text>
                                                        <Button
                                                            variant="primary"
                                                            className='mx-2'
                                                            as={Link}
                                                            to={`result/${product.id}`}
                                                        >
                                                            See Product
                                                        </Button>
                                                      
                                                    </Card.Body>


                                                </Card>
                                                <Card.Footer>

                                                </Card.Footer>

                                            </Col>

                                        </>
                                    ))}
                            </Row>
                        </Container>
                </CardGroup>
            </div>
        </>
    );
}

export default carousel;
