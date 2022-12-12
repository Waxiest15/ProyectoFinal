import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Row, Col, Image, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { BsPencilSquare, BsFillTrashFill, BsGear } from 'react-icons/bs';
import { CgAdd } from 'react-icons/cg';
import { AiOutlineStar, AiOutlineCreditCard } from 'react-icons/ai';
import "/xampp/htdocs/ProyectoFinal/resources/css/app.css";

//Editar número
function EditNumber(props) {
    //Other function
    const token = sessionStorage.getItem('token')
    const [number, setNumber] = useState('');
    const postData = async () => {
        const formData = new FormData();
        console.log(props.value, number)
        formData.append("cell_id", props.value)
        formData.append("phone", number)
        await axios.post('http://localhost:80/ProyectoFinal/public/api/cellUser_update',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
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
                placeholder="Set New Number"
                onChange={(e) => setNumber(e.target.value)}
            />
            <Button variant="primary" type='submit'>
                Submit
            </Button>
        </Form>
    );

}

//Editar número
function NewNumber(props) {
    //Other function
    const token = sessionStorage.getItem('token')
    const [number, setNumber] = useState('');
    const postData = async () => {
        console.log(number, props.value)
        const formData = new FormData();
        formData.append("user_id", props.value)
        formData.append("phone", number)
        await axios.post('http://localhost:80/ProyectoFinal/public/api/cellUser_store',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log('response');
                console.log(response.data);
                // window.location.reload(true);

            }
        }).catch(error => {
            console.log('nooo')
            console.log(error);
        })
    }


    return (
        <Form onSubmit={postData}>
            <Form.Label>Plese, set your phone number</Form.Label>
            <Form.Control
                placeholder="Set New Number"
                onChange={(e) => setNumber(e.target.value)}
            />
            <Button variant="primary" type='submit'>
                Submit
            </Button>
        </Form>
    );

}


function ProfileCard() {
    const user_id = sessionStorage.getItem('user')//current user_id
    const token = sessionStorage.getItem('token')

    const [isShown, setIsShown] = useState(false);
    function handleClick() {
        // toggle shown state
        setIsShown(!isShown);
        // or simply set it to true
        // setIsShown(true);
    };

    const [isShown1, setIsShown1] = useState(false);
    function handleClick1() {
        // toggle shown state
        setIsShown1(!isShown1);
        // or simply set it to true
        // setIsShown(true);
    };

    const [isNum, setIsNum] = useState(false);
    function val() {

    }


    //Add image user
    const [image, setImage] = useState(null);
    const onChangeFile = (e) => {
        setImage(e.target.files[0]);
    }
    const postImage = async () => {
        const formData = new FormData();
        formData.append("user_id", user_id)
        formData.append("image", image)
        await axios.post('http://localhost:80/ProyectoFinal/public/api/user_add_image',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log('response');
                console.log(response.data);
                window.location.reload(true);

            }
        }).catch(error => {
            console.log('nooo')
            console.log(error);
        })
    }





    const [user, setUser] = useState([]);
    useEffect(() => {//Get data User from Laravel
        axios.get(`http://localhost:80/ProyectoFinal/public/api/user/${user_id}`,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res)
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [address, setAddress] = useState([])

    useEffect(() => {//Get Address User from Laravel
        axios.get(`http://localhost:80/ProyectoFinal/public/api/address_user/${user_id}`)
            .then(res => {
                console.log(res)
                setAddress(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [phone, setPhone] = useState([])
    useEffect(() => {//Get Phone from Laravel
        axios.get(`http://localhost:80/ProyectoFinal/public/api/cellUser_show/${user_id}`,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res)
                setPhone(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //Delete phoneNumber  
    const DeleteNumber = async (e) => {
        await axios.delete(`http://localhost:80/ProyectoFinal/public/api/cellUser_destroy/${e}`,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })            .then(response => {
                console.log("delete", response.data)
                window.location.reload(true);
            }).catch(error => {
                console.log(error.response.data);

            })
    }

    //Delete Address  
    const DeleteAddress = async (e) => {//CHECAR
        console.log(e)
        await axios.delete(`http://localhost:80/ProyectoFinal/public/api/delete_address/${e}`
            ,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                console.log("delete Address", response.data)
                window.location.reload(true);
            }).catch(error => {
                console.log(error.response.data);

            })
    }


    return (
        <div class="div_card-profile">
            <Container>
                <Card className="w-75 p-3">
                    <h1>Profile</h1>
                    <Card.Header className="w-100 text-center">
                        {user.name} {user.last_name} {user.last_name2}
                    </Card.Header>
                    <Row>
                        <Col>
                            <Card.Img
                                src={user.image}
                                className="w-75 mx-auto d-block rounded border p-2"
                            />
                            <div className="d-grid gap-2">
                                <Form.Group controlId="formFile" className="">
                                    <Form.Label>New Image:</Form.Label>
                                    <Form.Control
                                        accept="image/*"
                                        type="file"
                                        onChange={onChangeFile}
                                    />
                                </Form.Group>
                                <div className="d-grid gap-1">
                                    <Button variant="warning" size="xs" onClick={postImage}>
                                        Change Image <BsGear />
                                    </Button>
                                </div>
                            </div>

                        </Col>


                        <Col>
                            <ListGroup className="list-group-flush">
                                <Row>
                                    <Col>
                                        <ListGroup.Item>Birthday: {user.birth} </ListGroup.Item>
                                    </Col>
                                    <Col>
                                        <ListGroup.Item>
                                            Gender: {user.gender}
                                        </ListGroup.Item>
                                    </Col>
                                </Row>
                                <ListGroup.Item>
                                    <strong>Contact info</strong>
                                </ListGroup.Item>
                                <p>Email: {user.email}</p>
                                <ListGroup.Item>
                                    <strong>Phone</strong>
                                </ListGroup.Item>
                                {phone.map(p =>
                                    <p className='gap-5'>{p.phone}  {<Button variant="primary" size="sm" onClick={handleClick} >  <BsPencilSquare /> </Button>}
                                        {<Button variant="danger" size="sm" className='mx-2' onClick={() => DeleteNumber(p.cell_id)} > <BsFillTrashFill /> </Button>}
                                        {isShown && <EditNumber value={p.cell_id} />}
                                    </p>
                                )}
                                {<Button size="lg" variant="success" onClick={handleClick1}><CgAdd /></Button>}
                                {isShown1 && <NewNumber value={user_id} />}

                            </ListGroup>


                        </Col>
                    </Row>
                    <h5></h5>

                    <Row>
                        <Col>
                            <Card.Body>


                                <Card.Title className="text-center">Address</Card.Title>
                                <hr />
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Neighborhood</th>
                                            <th>Street</th>
                                            <th>Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {address.map(add =>
                                            <tr>
                                                <td><Button variant="danger" size="sm" className='mx-2' onClick={() => DeleteAddress(add.id)} > <BsFillTrashFill /> </Button></td>
                                                <td>{add.state}</td>
                                                <td>{add.city}</td>
                                                <td>{add.neighborhood}</td>
                                                <td>{add.street}</td>
                                                <td>{add.number}</td>
                                            </tr>

                                        )}
                                    </tbody>
                                </Table>

                                <div className="d-grid gap-2">
                                    <Button variant="success" size="lg" as={Link} to="/ProyectoFinal/public/addAddress">
                                        Add New Address <CgAdd />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div >
    );
}

export default ProfileCard;
