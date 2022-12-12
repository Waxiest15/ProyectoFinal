import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';
import React from 'react';



function Signin() {

  function getToday() {
    var today = new Date();
    var diaHoy = today.getDate();
    if (diaHoy.toString().length <= 1) diaHoy = '0' + diaHoy
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + diaHoy; //'2022-12-03'
    var dateTime = date;

    var hoy = document.getElementById('birthDate');

    hoy.max = date;
  }

  const navigate = useNavigate();

  // Auth Context

  

  const [gender, setGender] = useState('')
  const [formValue, setFormValue] = useState({
    name: '',
    last_name: '',
    last_name2: '',
    birth: '',
    email: '',
    password: '',
  })
  // const [users, setUsers] = useState(['']);

  const [textError, setTextError] = useState('');
  const [formOk, setFormOk] = useState(true);


  function handleChange(e) {
    if (e.target.checked) {
      setFormValue.gender = e.value;
    }


  }

  const onChange = (e) => {
    e.persist();
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
    /*concatena al formValue,    email         lo que escriba el usuario como email */
  }

  const postData = async (e) => {
    setFormOk(true);
    if (e && e.preventDefault()) e.preventDefault(); e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValue.name)
    formData.append("last_name", formValue.last_name)
    formData.append("last_name2", formValue.last_name2)
    formData.append("birth", formValue.birth)
    formData.append("gender", gender)
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    //formData.append("image", formValue.image)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/register',
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
        console.log(response.data.user);
        // console.log(response.data)
        // let tokenForm = response.data.token;//obtener token 
        // sessionStorage.setItem('token', tokenForm)//guardan token 
        // localStorage.setItem('user', response.data.user_id)

        sessionStorage.setItem('token', response.data.token);

        sessionStorage.setItem('user', response.data.user.id);
        //setUser(response.data.user);

        console.log('test->',response.data.token);

        navigate("/ProyectoFinal/public/addAddress");

      }
    }).catch(error => {
      setFormOk(false);
      setTextError('Contraseña o correo incorrecto');
      console.log(error);
    })
  }

  return (
    <Container className="w-50">
      <Card className="m-3 p-3">
        <Card.Header className="text-center">
          <h1>Create account</h1>
        </Card.Header>
        <Form onSubmit={postData}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              maxLength={"100"}
              pattern="[A-Za-z]{1,100}"
              placeholder="Type your name"
              required
              value={formValue.name}
              onChange={onChange}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicLastNames">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  name="last_name"
                  type="text"
                  placeholder="Type middle name"
                  maxLength={"100"}
                  pattern="[A-Za-z]{1,100}"
                  required
                  value={formValue.last_name}
                  onChange={onChange}
                />
              </Form.Group>

            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicLastNames">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last_name2"
                  type="text"
                  placeholder="Type last name"
                  maxLength={"100"}
                  pattern="[A-Za-z]{1,100}"
                  required
                  value={formValue.last_name2}
                  onChange={onChange}
                />
              </Form.Group>

            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="birthDate">
            <Form.Label>Birth date</Form.Label>
            <Form.Control
              onSelect={getToday}
              name="birth"
              type="date"
              required
              value={formValue.birth}
              onChange={onChange}
            />
          </Form.Group>

          <Col>
            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="category"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Agrega tu género</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Nonbinary">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              title='Wrong email input, email must look like example@domain.com'
              name='email'
              type="email"
              placeholder="Type your email"
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              maxLength={100}
              required
              value={formValue.email}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              // pattern="(?=.*?[#?!@$%^&*-\]\[]){8,20}[A-Za-z]"
              placeholder="Password"
              value={formValue.password}
              onChange={onChange} />
          </Form.Group>
          <Button variant="primary" type='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Signin;
