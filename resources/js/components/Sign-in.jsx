import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function getToday(){
  var today = new Date();
  var diaHoy = today.getDate();
  if(diaHoy.toString().length<=1) diaHoy='0'+diaHoy
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+diaHoy; //'2022-12-03'
  var dateTime = date;

  var hoy = document.getElementById('birthDate');
  
  hoy.max=date;
}

function confirmPassword() {
  let pssw;
  let psswC;

  pssw=document.getElementById('password').value;
  psswC=document.getElementById('confirmPassword').value;

  console.log('password: ', pssw);
  console.log('password Confirm: ', psswC);

  if(pssw!=psswC){
    document.getElementById('btn_submit').disabled=true;
    console.log('No son iguales')
  }else{
    document.getElementById('btn_submit').disabled=false;
  }
}

function Signin() {
  return (
    <Container className="w-50" >
        <Card className="m-3 p-3">
          <Card.Header className="text-center">
            <h1>Registro</h1>
          </Card.Header>
        <Form>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control
            title='Solo se aceptan caracteres alfabeticos [a-z]'
            name="name"
            type="text"
            maxLength={"100"}
            pattern="[A-Za-z ]{1,100}" 
            placeholder="Escribe tu nombre(s)"
            required
            />
        </Form.Group>
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="last_name">
            <Form.Label>Apellido paterno</Form.Label>
            <Form.Control
            title='Solo se aceptan caracteres alfabeticos [a-z]'
            name="last_name"
            type="text"
            placeholder="Apellido paterno"
            maxLength={"100"}
            pattern="[A-Za-z ]{1,100}" 
            required
            />
        </Form.Group>  
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="last_name2">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control
            title='Solo se aceptan caracteres alfabeticos [a-z]'
            name="last_name2"
            type="text"
            placeholder="Apellido materno"
            maxLength={"100"}
            pattern="[A-Za-z ]{1,100}" 
            required
            />
        </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="birthDate">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
            onSelect={getToday}
            name="birth"
            type="date" 
            required
            />
        </Form.Group>

        <Form.Group controlId="gender" required>
        <Form.Label>Genero</Form.Label>
            <Form.Check
                name='genderCheck'
                value="Male"
                type="radio"
                aria-label="radio 1"
                label="Hombre"
            />
            <Form.Check
                name='genderCheck'
                value="Female"
                type="radio"
                aria-label="radio 2"
                label="Mujer"
                />
            <Form.Check
                name='genderCheck'
                value="Other"
                type="radio"
                aria-label="radio 2"
                label="Otro"
                />
        </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control 
        title='Solo se aceptan caracteres alfabeticos [a-z] especiales (%?+- etc), debe tener el formato example@extension.algo[.algo]'
        name='email'
        type="email"
        placeholder="Escribe tu correo" 
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        maxLength={100}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
        onChange={confirmPassword}
        type="password"
        pattern="(?=.*?[#?!@$%^&*-\]\[]){8,20}"
        name='password'
        placeholder="Contraseña" 
        
        required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control
        onChange={confirmPassword}
        name='Confirmpassword'
        type="password"
        pattern="(?=.*?[#?!@$%^&*-\]\[]){8,20}"
        placeholder="Confirmar contraseña" 
        required
        />
      </Form.Group>

      <Button id='btn_submit' variant="primary" as={Link} to='/ProyectoFinal/public/'>
        Submit
      </Button>
    </Form>
        </Card>
    </Container>
  );
}

export default Signin;