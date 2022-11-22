import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css"

function ProfileCard() {
  return (
    <div class="div_card-profile">
        <Container>
        <Card className="w-50 p-3">
        <h1>MI perfil</h1>
          <Card.Header className="w-100 text-center">Nombre</Card.Header>
      <Row>
        <Col>
          <Card.Img  src="images/profile-default.webp" />  
        </Col>
        <Col>
          <ListGroup className="list-group-flush">
            <Row>
              <Col>
              <ListGroup.Item>Edad: </ListGroup.Item>  
              </Col>
              <Col>
              <ListGroup.Item>Genero: </ListGroup.Item>
              </Col>
            </Row>
            <ListGroup.Item>Direccion: </ListGroup.Item>
            <ListGroup.Item>Informacion de contacto</ListGroup.Item>
            <ListGroup.Item>Correo: </ListGroup.Item>
            <ListGroup.Item>Telefono: </ListGroup.Item>
          </ListGroup>  
        </Col>
      </Row>
      <Row>
        <Col>
        <Card.Body>
        <Card.Title>Mascotas</Card.Title> 
        <Row>
          <Col>Nombre</Col>
          <Col>Especie</Col>
          <Col>Raza</Col>
        </Row>
      </Card.Body>
        </Col>
      </Row>
    </Card>
    </Container>
    </div>
  );
}

export default ProfileCard;