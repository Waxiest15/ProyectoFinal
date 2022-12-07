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
        <Card className="w-75 p-3">
        <h1>MI perfil</h1>
          <Card.Header className="w-100 text-center">Fernando Robles Castorena</Card.Header>
      <Row>
        <Col>
          <Card.Img  src="images/profile-default.webp"
          className='w-75 mx-auto d-block'
           />  
        </Col>
        <Col>
          <ListGroup className="list-group-flush">
            <Row>
              <Col>
              <ListGroup.Item>Edad: 21</ListGroup.Item>  
              </Col>
              <Col>
              <ListGroup.Item>Genero: M</ListGroup.Item>
              </Col>
            </Row>
            <ListGroup.Item>Direccion: Col. Inventada, Calle imaginaria, No: 123</ListGroup.Item>
            <ListGroup.Item><strong>Informacion de contacto</strong></ListGroup.Item>
            <ListGroup.Item>Correo: inventino@gmail.com</ListGroup.Item>
            <ListGroup.Item>Telefono: 449 879 6542</ListGroup.Item>
          </ListGroup>  
        </Col>
      </Row>
      <p>Direccion de envio: Col. Villanos, C. Heisenerg 103</p>
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