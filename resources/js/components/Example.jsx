import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import View from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'postcss';
import axios from 'axios';


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
        email:'',
        password:''
    })

    const [users, setUsers]=useState([])

    const [name, setName] = useState('')

    const onChange = (e) =>{
        e.persist();
        setformValue({...formValue, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e)=>{
        if(e && e.preventDefault()) e.preventDefault();
        const formData = new FormData;
        formData.append('email', formValue.email);
        formData.append('password', formValue.password);
        //<--lo mismo pero con password
        axios.post("http://localhost:80/Shopet/public/api/show_test",formData, {headers: {'Content-type': 'multipart/form-data', 
        'Accept': 'application/json'}}
        ).then(response => {
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
                        <div className="card-header" >{name}</div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={formValue.email} onChange={onChange}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={formValue.password} onChange={onChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                        {users.map((user)=>(
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
                        ))}
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

