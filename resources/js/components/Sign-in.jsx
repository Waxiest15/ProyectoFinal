import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Signin() {
  return (
    <Container className="w-50">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control type="text" placeholder="Escribe tu nombre(s)" />
        </Form.Group>
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicLastNames">
            <Form.Label>Apellido paterno</Form.Label>
            <Form.Control type="text" placeholder="Escribe aqui" />
        </Form.Group>  
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicLastNames">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control type="text" placeholder="Escribe aqui" />
        </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Edad</Form.Label>
            <Form.Control type="number" placeholder="Escribe tu edad" />
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
        <Form.Control type="email" placeholder="Escribe tu correo" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Signin;