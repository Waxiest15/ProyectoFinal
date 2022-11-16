import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import {PencilSquare, Trash3} from 'react-bootstrap-icons';

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css"

function PetCard() {
  return (
    <div class="div_card-profile">
        <Container className="w-50">
        <Button as={Link} to="/ProyectoFinal/public/addPet">Add Pet</Button>
        <Card style={{ width: '40rem' }}>
            <h1>Mis mascotas</h1>
            <hr />
            <Row>
                <Col>
                <Card.Header className="w-100">Nombre de mascota</Card.Header>    
                </Col>
                <Col>
                <Row>
                    <Col className="text-end me-3">
                    <Button className='me-1' as={Link} to="/ProyectoFinal/public/editPet" title="Editar informacion"><PencilSquare/></Button>
                    <Button ><Trash3/></Button>    
                    </Col>
                </Row>
                </Col>
                
            </Row>
            <Row ClassName="g-0">
                <Col>
                    <Card.Img  src="images/Koda.jpg" style={{maxWidth: '300px', maxHeight: '300px', margin: "10px"}}/>
                </Col>
                <Col>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Especie: Perro</ListGroup.Item>
                        <ListGroup.Item>Raza: Labrador</ListGroup.Item>
                        <ListGroup.Item>Pelaje: Negro</ListGroup.Item>
                        <ListGroup.Item>Edad: 2 años</ListGroup.Item>
                        <ListGroup.Item>Altura: 1.0m</ListGroup.Item>
                        <ListGroup.Item>Caracteristicas Fisicas: Sancon</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card.Body>
                        <Card.Text>Notas:</Card.Text>
                        <Card.Text>
                        Comunmente jugueton, despues de un rato se quedara dormido
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            </Card>
            </Container>
    </div>
  );
}

export default PetCard;