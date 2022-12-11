import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Image, Form, Alert } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Data from './JSONs/comments.json'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import React from 'react';
import { useRef, useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import { BsPencilSquare, BsFillTrashFill, BsCart3 } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineCreditCard } from 'react-icons/ai';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypal(props) {
  const user_id = sessionStorage.getItem('user');
  //hacer post de pastbuys
  const postBuy = async () => {
    if (e && e.preventDefault()) e.preventDefault(); e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", user_id)
    formData.append("product_id", props.value)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/user_buy',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      if (response.status == 200) {
        console.log('responsefasfrgarejgñoierjhsth');
        console.log(response.data);
      }
    }).catch(error => {
      console.log(error);
      console.log('no jaló :c');
    })
  }
  return (
    <div>
      <PayPalScriptProvider options={{ "client-id": "AYcwDoQW6grHeC8qKSjVp35vNRUvhOljz6lpx4ki8H-91IX_LvNlpmO4kewWra8d8wTAPbrZ9NC9g_nl" }}>
        <PayPalButtons style={{ layout: "horizontal" }} />
      </PayPalScriptProvider>
    </div>

  );
}

function EditComment(props) {

  //Other function
  const [text, setText] = useState('');
  const postData = async (e) => {
    if (e && e.preventDefault()) e.preventDefault(); e.preventDefault();
    const formData = new FormData();
    formData.append("id", props.value)
    formData.append("comment", text)
    //formData.append("image", formValue.image)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/update_comment',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      if (response.status == 200) {

        console.log('response');
        //console.log(response.data);
        console.log(response.data);
        window.location.reload(true);

      }
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <Form onSubmit={postData}>
      <Form.Control
        onChange={(e) => setText(e.target.value)}
        as='textarea'
        rows={7}
      />
      <Button variant="primary" type='submit'>
        Submit
      </Button>
    </Form>
  );

}

function ShowProduct() {




  const user_id = sessionStorage.getItem('user');
  const token = sessionStorage.getItem('token');

  let id = useParams();//para pasar product_id
  console.log('id--->>>', id)

  //hacer post para pastbuys
  const [buy, setBuy] = useState(false);
  const PostBuy = async (e) => {
    const formData = new FormData();
    formData.append("user_id", user_id)
    formData.append("product_id", e)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/user_buy',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      if (response.status == 200) {
        console.log('responsefasfrgarejgñoierjhsth');
        console.log(response.data);
        setBuy(true)
      }
    }).catch(error => {
      console.log(error);
      console.log('no jaló :c');
    })
  }




  const [comment, setComment] = useState('');
  const PostComment = async () => {
    console.log(user_id, product.id, comment)
    const formData = new FormData();
    formData.append("user_id", user_id)
    formData.append("product_id", product.id)
    formData.append("comment", comment)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/make_comment',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    )
  }



  const handleDelete = async (e) => {
    await axios.delete(`http://localhost:80/ProyectoFinal/public/api/comment_delete/${e}`)
      .then(response => {
        console.log("delete", response.data)
        window.location.reload(true);
      }).catch(error => {
        console.log(error.response.data);

      })
  }

  //Agregar al carrito 
  const [cart, setCart] = useState(false);
  const AddCart = async (e) => {
    const formData = new FormData();
    formData.append("product_id", e)
    formData.append("user_id", user_id)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/user_add_shopping_cart_products',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      if (response.status == 200) {
        setCart(true)
        console.log('response');
        //console.log(response.data);
        console.log(response.data);

      }
    }).catch(error => {
      console.log(error);
    })
  }

  //Agregar al Wishlist
  const [wish, setWish] = useState(false);
  const AddWishlist = async (e) => {
    const formData = new FormData();
    formData.append("product_id", e)
    formData.append("user_id", user_id)
    //formData.append("image", formValue.image)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/user_add_wishlist_products',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      if (response.status == 200) {
        setWish(true)
        console.log('response');
        //console.log(response.data);
        console.log(response.data);

      }
    }).catch(error => {
      console.log(error);
    })
  }


  const [product, setProduct] = useState([]);
  useEffect(() => {//Get Products from Laravel
    axios.get(`http://localhost:80/ProyectoFinal/public/api/product_show/${id.pro}`)
      .then(res => {
        console.log(res)
        setProduct(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  const [comments, setCommets] = useState([]);
  useEffect(() => {//Get Commets from Laravel
    axios.get(`http://localhost:80/ProyectoFinal/public/api/comment_show/${id.pro}`)
      .then(res => {
        console.log(res)
        setCommets(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const [shopcart, setShopcart] = useState(false);
  useEffect(() => {//Get Shoppingcart from Laravel
    axios.get(`http://localhost:80/ProyectoFinal/public/api/inCart/${user_id}/${id.pro}`)
      .then(res => {
        console.log("restrue")
        console.log(res)
        if (res.data == 1) {
          setShopcart(true)
        }
      })
      .catch(err => {
        console.log(err)
        console.log("res")
      })
  }, [])

  function ed(id) {
    if (user_id == id && token)
      return true;
  }

  const t = true;

  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    // toggle shown state
    setIsShown(!isShown);
    // or simply set it to true
    // setIsShown(true);
  };

  
  const amounts = JSON.stringify(
    `${product.price}`
    )
  return (
    <Container className='m-3'>
      <Card className='p-3 gap-3'>
        <Row>
          <Col>
            <Image
              className='rounded border p-2'
              src={"../" + product.image}
            />
          </Col>
          <Col className="me-3 p-3">
            <Card.Text>
              <h4>{product.name}</h4>
            </Card.Text>
            <Card.Text>Rate: {product.rate}/5</Card.Text>
            <Card.Text>
              Price: ${product.price}
            </Card.Text>
            <Card.Text>
              Arrival time: {product.deliverTime} días {amounts}
            </Card.Text>
            <Card.Text>
              Units available: {product.amount}
            </Card.Text>
            {cart && (<Alert key='danger' variant='success'>Product added to Shopping Cart</Alert>)}
            <Button variant="outline-primary" onClick={() => AddCart(product.id)} >Add to Shopping Cart <BsCart3 /> </Button>
            
            <br />
            <br />
            {wish && (<Alert key='danger' variant='success'>Product added to Wishlist</Alert>)}
            <Button variant="outline-primary" onClick={() => AddWishlist(product.id)}>Agregar a la Wishlist <AiOutlineStar /></Button>
            <br />
            <br/>
            {buy && (<Alert key='danger' variant='success'>Product bought</Alert>)}
            <Button variant='outline-success' size="lg" onClick={() => PostBuy(product.id)} ><h5>Buy Product for {product.price}</h5><AiOutlineCreditCard/>  </Button>
            <br />
            <br />
            <PayPalScriptProvider
              options={{ "client-id": "AYcwDoQW6grHeC8qKSjVp35vNRUvhOljz6lpx4ki8H-91IX_LvNlpmO4kewWra8d8wTAPbrZ9NC9g_nl" }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "100"
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  const details = await actions.order.capture();
                  const name = details.payer.name.given_name;
                  alert("Transaction completed by " + name);
                }}
              />
            </PayPalScriptProvider>
          </Col>

        </Row>
        <hr />
        <Row>
          <Col>
            <Card.Text className="mt-2"><h4>Characteristic:</h4></Card.Text>
            <Container className='w-50 d-block ms-0'>
              <ListGroup comment="flush">
                <ListGroup.Item>
                  Brand: {product.business_id}
                </ListGroup.Item>
                <ListGroup.Item>
                  Model: {product.id}
                </ListGroup.Item>
                <ListGroup.Item>
                  Size: {product.size} cm
                </ListGroup.Item>
                <ListGroup.Item>
                  Weight: {product.weight}kg
                </ListGroup.Item>
              </ListGroup>
            </Container>
            <Card.Text className="mt-2"><h4>Description:</h4></Card.Text>
            <Form.Control
              value={product.description}
              readOnly
              as='textarea'
              rows={7}
            />
          </Col>
        </Row>


      </Card>
      <br />
      <Card>
        <Card.Text className="mt-2 text-center"><h1>Comments</h1></Card.Text>
      </Card>
      <br />
      {comments.map(com =>

        <Card className=" w-100 mb-2">
          <Card.Body>
            <Card.Text>
              <Row>
                <Col>
                  <p class='mb-1'>
                    <strong>{com.user_name} {com.user_lastname}</strong>
                  </p>
                </Col>
                <Col className='d-block ms-auto text-end'>
                  <p class='text-muted'>{com.date}</p>
                </Col>


              </Row>
              <Form.Control
                id={com.id}
                value={com.comment}
                readOnly
                as='textarea'
                rows={7}
              />
            </Card.Text>
            {ed(com.user_id) ? <>  {<Button variant="primary" onClick={handleClick} > <BsPencilSquare /> </Button>} {isShown && <EditComment value={com.id} />} </> : <></>}
            {ed(com.user_id) ? <Button variant="danger" onClick={() => handleDelete(com.id)} > <BsFillTrashFill /> </Button> : <></>}
          </Card.Body>

        </Card>
      )}
      <Card>
        <Card.Header className="text-center">
          <h4>Add Comment</h4>
        </Card.Header>
        <Form onSubmit={PostComment}>
          <Form.Control
            as='textarea'
            rows={7}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button variant="primary" type='submit'>
            Make comment
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default ShowProduct;