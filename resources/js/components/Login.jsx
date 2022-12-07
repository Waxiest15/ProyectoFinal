import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useRef, useState, useEffect } from "react";
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login() {

  const onChangeFormData = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // State de los errores del formulario
  const [textError, setTextError] = useState('');
  const [formOk, setFormOk] = useState(true);

  // Funcion de react router dom
  const navigate = useNavigate();

  // States del formulario
  const [formData, setformData] = useState({
    email: '',
    password: ''
  });

  const login = (e) => {
    e.preventDefault();

    // Validación del formulario
    setFormOk(true);

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    axios.post("http://localhost:80/ProyectoFinal/public/api/login",
      formData,
      { headers })
      .then(response => {
        console.log(response)
        sessionStorage.setItem('token', response.data.token);
        //setUserLogged(true);

        sessionStorage.setItem('user', response.data.user.id);
        //setUser(response.data.user);

        navigate("/ProyectoFinal/public/");

      }).catch(error => {
        console.log(error)
        setTextError('Contraseña o correo incorrecto');
      });
  }
  return (
    <>
      <div className="container d-flex justify-content-center">
        <Card className="p-3 mt-5 login">
          <h5 className="text-center">Inicio de Sesión</h5>

          <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={formData.email}
                name="email"
                onChange={onChangeFormData}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={formData.password}
                name="password"
                onChange={onChangeFormData}
                autoComplete="on"
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Iniciar Sesión
              </Button>
            </div>
            <div className="text-center">
              <Form.Label className="mt-2">¿No tienes una cuenta? <Link to="/ProyectoFinal/public/signin"><span className='text-primary' role="button">Registrate</span></Link></Form.Label>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default Login;