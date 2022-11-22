import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import View from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'postcss';
import axios, { Axios } from 'axios';
import { method } from 'lodash';


function First(){
    return(
        <Button>
            xd
        </Button>
    )
}

function BasicExample () {
    const [formValue, setformValue]=useState({
        email:'',
        psswd:''
    })

    const onChange = (e) =>{
        e.persist();
        setformValue({...formValue, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e)=>{
        if(e && e.preventDefault()) e.preventDefault();
        const formData = new FormData;
        formData.append('email', formValue.email);
        formData.append('password', formValue.psswd);
        //<--lo mismo pero con password
        axios.post("http://localhost:80/Shopet/public/api/show_user",formData, {headers: {'Content-type': 'multipart/form-data', 
        'Accept': 'application/json'}}
        ).then(response => {
            console.log('response');
            console.log(response);
        }) .catch(error =>{
            console.log(error);
        })

    }
}


function Example() {

    const [formValue, setformValue]=useState({
        name: '',
        last_name: '',
        last_name2: '',
        birth: '',
        gender: '',
        email: '',
        password: ''
    })

    const [users, setUsers]=useState([])

    const [name, setName] = useState('')
    const [last_name, setlast_name] = useState('')
    const [last_name2, setlast_name2] = useState('')
    const [birth, setBirth] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const onChange = (e) =>{
    //     e.persist();
    //     setformValue({...formValue, [e.target.name]: e.target.value});
    // }

    // const handleSubmit = (e)=>{
    //     if(e && e.preventDefault()) e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', formValue.name);
    //     formData.append('last_name', formValue.last_name);
    //     formData.append('last_name2', formValue.last_name2);
    //     formData.append('birth', formValue.birth);
    //     formData.append('gender', formValue.gender);
    //     formData.append('email', formValue.email);
    //     formData.append('password', formValue.password);
    //     console.log(formData.entries);
    //     //<--lo mismo pero con password
    //     axios.post("http://localhost:80/ProyectoFinal/public/api/user_store",
    //     formData, 
    //     {headers: {'Content-type': 'multipart/form-data', 
    //     'Accept': 'application/json'}}
    //     ).then(response => {
    //         if(response.status==200){
    //             console.log('response');
    //             setUsers(response.data);
                

    //         }
    //     }) .catch(error =>{
    //         console.log(error);
    //     })

    // }

    const postData = async(e) => {
        
        e.preventDefault();
        await axios.post('http://localhost:80/ProyectoFinal/public/api/user_store',{
            name: name,
            last_name: last_name,
            last_name2: last_name2,
            birth: birth,
            gender: gender,
            email: email,
            password: password
        }).then(response => {
            if(response.status==200){
                console.log('response');
                setUsers(response.data);
                

            }
        }) .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header" ></div>
                        <Form onSubmit={postData}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre(s)</Form.Label>
                                <Form.Control name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Apellido Paterno</Form.Label>
                                <Form.Control name='last_name' value={last_name} onChange={(e) => setlast_name(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Apellido Materno</Form.Label>
                                <Form.Control name='last_name2' value={last_name2} onChange={(e) => setlast_name2(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>TEMP fecha de nacimiento</Form.Label>
                                <Form.Control name='birth' value={birth} onChange={(e) => setBirth(e.target.value)}/>
                            </Form.Group>

                            <Form.Select name='gender' aria-label="Default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option>Género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="No-Binario">No-Binario</option>
                                <option value="Prefiero No Decirlo">Prefiero No Decirlo</option>
                            </Form.Select>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                        {/* {users.map((user)=>(
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>{user.name}</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                          </Card>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
{/* 
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
*/}

