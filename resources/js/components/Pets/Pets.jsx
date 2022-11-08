import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css"

function ProfileCard() {
  return (
    <div class="div_card-profile">
        <Container className="w-50">
        <Button as={Link} to="/ProyectoFinal/public/addPet">Add Pet</Button>
        <Card style={{ width: '40rem' }}>
            <h1>Mis mascotas</h1>
            <Card.Header className="w-100">Nombre de mascota</Card.Header>
            <Row ClassName="g-0">
                <Col>
                    <Card.Img  src="images/Koda.jpg" style={{maxWidth: '300px', maxHeight: '300px', margin: "10px"}}/>
                </Col>
                <Col>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Especie: </ListGroup.Item>
                        <ListGroup.Item>Raza: </ListGroup.Item>
                        <ListGroup.Item>Pelaje: </ListGroup.Item>
                        <ListGroup.Item>Edad: </ListGroup.Item>
                        <ListGroup.Item>Altura: </ListGroup.Item>
                        <ListGroup.Item>Caracteristicas Fisicas: </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card.Body>
                        <Card.Text>Notas:</Card.Text>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            </Card>
            </Container>
    </div>
  );
}

export default ProfileCard;