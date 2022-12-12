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


function Bought() {
  const user_id = sessionStorage.getItem('user');
  const token = sessionStorage.getItem('token');

  const [products, setProduct] = useState([]);
  useEffect(() => {//Get Neighborhoods from Laravel
    axios.get(`http://localhost:80/ProyectoFinal/public/api/user_past_shopping/${user_id}`,
    {
      headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  })
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <Container className='p-3 pt-5'>


      {products.map(item =>
        <Card className="p-3 w-100 my-2">
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
                      {item.description}</p>

                  </ListGroup.Item>
                  <ListGroup.Item>
                    Rate: {item.rate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Price: ${item.price}
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


    </Container>
  );
}

export default Bought;