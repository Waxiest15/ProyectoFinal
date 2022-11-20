import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function Signin() {
  return (
    <Container className="w-50">
        <Card className="m-3 p-3">
          <Card.Header className="text-center">
            <h1>Registro</h1>
          </Card.Header>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control
            name="name"
            type="text"
            maxLength={"100"}
            pattern="[A-Za-z]{1,100}" 
            placeholder="Escribe tu nombre(s)"
            required
            />
        </Form.Group>
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicLastNames">
            <Form.Label>Apellido paterno</Form.Label>
            <Form.Control
            name="apellidoP"
            type="text"
            placeholder="Apellido paterno"
            maxLength={"100"}
            pattern="[A-Za-z]{1,100}" 
            required
            />
        </Form.Group>  
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicLastNames">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control
            name="apellidoM"
            type="text"
            placeholder="Apellido materno"
            maxLength={"100"}
            pattern="[A-Za-z]{1,100}" 
            required
            />
        </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Edad</Form.Label>
            <Form.Control
            id='age'
            name="age"
            type="number" 
            placeholder='Escribe tu edad'
            min={0}
            max={100}
            required
            />
        </Form.Group>

        <Form.Group controlId="kindOfStand">
        <Form.Label>Genero</Form.Label>
            <Form.Check
                value="Male"
                type="radio"
                aria-label="radio 1"
                label="Hombre"
            />
            <Form.Check
                value="Female"
                type="radio"
                aria-label="radio 2"
                label="Mujer"
                />
            <Form.Check
                value="Other"
                type="radio"
                aria-label="radio 2"
                label="Otro"
                />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control
        type="email"
        placeholder="Escribe tu correo" 
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        maxLength={100}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
        type="password"
        placeholder="Contraseña" 
        pattern="(?=.*?[#?!@$%^&*-\]\[]){8,20}"
        required
        />
      </Form.Group>
      <Button variant="primary">
        Submit
      </Button>
    </Form>
        </Card>
    </Container>
  );
}

export default Signin;